# -*- coding: utf-8 -*-
# Query OpenAI for a comment
# (This script was originally written by Olivia Lucca Fraser)
# @category Machine Learning
# @keybinding Ctrl-G
# @menupath File.Analysis.G-3PO Analyse function with GPT
# @toolbar G3PO.png

##########################################################################################
# Script Configuration
##########################################################################################
MODEL = "llama3.2"
MODEL = askChoice("Model",
                  "Please choose a language model to query",
                  ["llama3.2"],
                  "llama3.2")
TEMPERATURE = 0.05
TIMEOUT = 600         # How many seconds should we wait for a response from the LLM?
MAXTOKENS = 1024      # The maximum number of tokens to request
G3POSAY = False       # Disable ASCII art decoration so the actual text shows up
LANGUAGE = "English"
EXTRA = ""            # An empty string
COMMENTWIDTH = 80
RENAME_FUNCTION = True
RENAME_VARIABLES = False
OVERRIDE_COMMENTS = True
G3POASCII = """
          /~\\
         |oo )
         _\\=/_      
        /     \\
       //|/\\.\\|\\\\
      ||  \\_/  ||
      || |\\ /| ||
       # \\_ _/  #
         | | |
         | | |
         []|[]
         | | |
        /_]_[_\\
"""
SEND_ASSEMBLY = False
##########################################################################################

import textwrap
import logging
from logging import DEBUG, INFO, WARNING, ERROR, CRITICAL
import json
import os
import sys
import re
import ghidra
from ghidra.app.script import GhidraScript
from ghidra.program.model.listing import Function, FunctionManager
from ghidra.program.model.mem import MemoryAccessException
from ghidra.util.exception import DuplicateNameException
from ghidra.program.model.pcode import HighFunctionDBUtil
from ghidra.app.decompiler import DecompileOptions
from ghidra.app.decompiler import DecompInterface
from ghidra.util.task import ConsoleTaskMonitor
from ghidra.program.flatapi import FlatProgramAPI

# FIX: Add missing import for SourceType
from ghidra.program.model.symbol import SourceType

# Define a filter class that only allows log records containing the AI response.
class AIResponseFilter(logging.Filter):
    def filter(self, record):
        # Only allow records that include the phrase "Raw AI response:" in their message.
        return "Raw AI response:" in record.getMessage()

# --- Set up file logging so that logs are saved to a file on Desktop only if they contain the AI response ---
desktop_path = os.path.join(os.path.expanduser("~"), "Desktop", "G3PO_interaction_log.txt")
file_handler = logging.FileHandler(desktop_path)
file_handler.setLevel(DEBUG)
file_handler.setFormatter(logging.Formatter('%(asctime)s - %(levelname)s - %(message)s'))
# Add our filter:
file_handler.addFilter(AIResponseFilter())
logging.getLogger().addHandler(file_handler)

# Set console logging to DEBUG for maximum output (the console will show all logs).
LOGLEVEL = DEBUG
logging.getLogger().setLevel(LOGLEVEL)

# --- Fallback HTTP POST function for Jython ---
try:
    import httplib
    def send_http_request(address, path, data, headers):
        try:
            conn = httplib.HTTPConnection(address)
            json_req_data = json.dumps(data)
            conn.request("POST", path, json_req_data, headers)
            response = conn.getresponse()
            resp_data = response.read()
            conn.close()
            if isinstance(resp_data, bytes):
                resp_data = resp_data.decode("utf-8", errors="replace")
            logging.debug("Raw Ollama response: %r", resp_data)
            lines = resp_data.splitlines()
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                try:
                    obj = json.loads(line)
                    if "error" in obj:
                        logging.error("Ollama error: {}".format(obj["error"]))
                        return None
                    return obj
                except Exception as e2:
                    pass
            logging.error("No valid JSON found in the response.")
            return None
        except Exception as e:
            logging.error("Error sending HTTP request: {}".format(e))
            return None
except ImportError:
    try:
        import requests
        def send_http_request(address, path, data, headers):
            try:
                url = "http://" + address + path
                resp = requests.post(url, json=data, headers=headers)
                return resp.json()
            except Exception as e:
                logging.error("Error sending HTTP request: {}".format(e))
                return None
    except ImportError:
        logging.error("This script requires either httplib or requests.")
        sys.exit(1)

# --- End HTTP fallback ---

try:
    import tiktoken
    ENCODING = tiktoken.encoding_for_model(MODEL)
    def estimate_number_of_tokens(s):
        return len(ENCODING.encode(s))
except ImportError:
    def estimate_number_of_tokens(s):
        return int(len(s)/2.3)

SOURCE = "AI"
TAG = SOURCE + " generated comment, take with a grain of salt:"
FOOTER = "Model: {model}, Temperature: {temperature}".format(model=MODEL, temperature=TEMPERATURE)

STATE = getState()
PROGRAM = state.getCurrentProgram()
FLATAPI = FlatProgramAPI(PROGRAM)

def flatten_list(l):
    return [item for sublist in l for item in sublist]

def wordwrap(s, width=COMMENTWIDTH, pad=True):
    lines = [textwrap.TextWrapper(width=width,
                                  break_long_words=False,
                                  break_on_hyphens=True,
                                  replace_whitespace=False).wrap("    " + L)
             for L in s.splitlines()]
    lines = flatten_list(lines)
    if pad:
        lines = [line.ljust(width) for line in lines]
    return "\n".join(lines)

def boxedtext(text, width=COMMENTWIDTH, tag=TAG):
    wrapped = wordwrap(text, width, pad=True)
    wrapped = "\n".join([tag.ljust(width),
                         " ".ljust(width),
                         wrapped,
                         " ".ljust(width),
                         FOOTER.ljust(width)])
    side_bordered = "|" + wrapped.replace("\n", "|\n|") + "|"
    top_border = "/" + "-" * (len(side_bordered.split("\n")[0]) - 2) + "\\"
    bottom_border = top_border[::-1]
    return top_border + "\n" + side_bordered + "\n" + bottom_border

def g3posay(text, width=COMMENTWIDTH, character=G3POASCII, tag=TAG):
    box = boxedtext(text, width, tag=tag)
    headwidth = len(character.split("\n")[1]) + 2
    return box + "\n" + " " * headwidth + "/" + character

def escape_unescaped_single_quotes(s):
    return re.sub(r"(?<!\\)'", r"\\'", s)

def is_chat_model(model):
    return False  # Force non-chat mode

################################################################################
# OLLAMA REQUEST ADAPTION
################################################################################
def ollama_request(prompt, temperature=0.19, max_tokens=MAXTOKENS, model=MODEL):
    address = "localhost:11434"  # Local Ollama instance
    path = "/api/generate"
    if is_chat_model(model):
        prompt_text = []
        for msg in prompt:
            role = "User" if msg["role"] == "user" else "System"
            if msg["role"] == "assistant":
                role = "Assistant"
            prompt_text.append("{}: {}".format(role, msg["content"]))
        prompt_text.append("Assistant: ")
        prompt_text = "\n".join(prompt_text)
    else:
        prompt_text = "\n".join(m["content"] for m in prompt)
    data = {"prompt": prompt_text,
            "model": str(model),  # Ensure the model is a string.
            "temperature": temperature,
            "max_tokens": max_tokens,
            "stream": False,
            "compat": True}
    headers = {"Content-Type": "application/json"}
    result = send_http_request(address, path, data, headers)
    if result is None:
        return None
    if "error" in result:
        logging.error("Ollama error: {}".format(result["error"]))
        return None
    return result.get("response", "").strip()

################################################################################
# Direct query function.
################################################################################
def query(prompt, temperature=TEMPERATURE, max_tokens=MAXTOKENS, model=MODEL):
    return ollama_request(prompt, temperature, max_tokens, model)

################################################################################

def get_current_function():
    logging.debug("currentAddress: {}".format(currentAddress))
    listing = currentProgram.getListing()
    return listing.getFunctionContaining(currentAddress)

def decompile_current_function(function=None):
    if function is None:
        function = get_current_function()
    logging.info("Current address is at {}".format(currentAddress.__str__()))
    logging.info("Decompiling function: {} at {}".format(function.getName(), function.getEntryPoint().__str__()))
    decomp = ghidra.app.decompiler.DecompInterface()
    decomp.openProgram(currentProgram)
    decomp_res = decomp.decompileFunction(function, TIMEOUT, monitor)
    if decomp_res.isTimedOut():
        logging.warning("Timed out while attempting to decompile '{}'".format(function.getName()))
    elif not decomp_res.decompileCompleted():
        logging.error("Failed to decompile {}".format(function.getName()))
        logging.error("    Error: " + decomp_res.getErrorMessage())
        return None
    return decomp_res.getDecompiledFunction().getC()

def get_assembly(function=None):
    if function is None:
        function = get_current_function()
    listing = currentProgram.getListing()
    code_units = listing.getCodeUnits(function.getBody(), True)
    return "\n".join([code_unit.toString() for code_unit in code_units])

def get_code(function=None):
    return get_assembly(function) if SEND_ASSEMBLY else decompile_current_function(function)

def get_architecture():
    arch = currentProgram.getLanguage().getProcessor().toString()
    word_size = currentProgram.getLanguage().getLanguageDescription().getSize()
    endianness = currentProgram.getLanguage().getLanguageDescription().getEndian().toString()
    return {'arch': arch, 'word_size': word_size, 'endianness': endianness}

def lang_description():
    lang = "C"
    if SEND_ASSEMBLY:
        arch_details = get_architecture()
        arch = arch_details['arch']
        word_size = arch_details['word_size']
        endianness = arch_details['endianness']
        lang = "{arch} {word_size}-bit {endianness}".format(arch=arch, word_size=word_size, endianness=endianness)
    return lang

def build_prompt_for_function(code, function_name):
    lang = lang_description()
    intro = """You are a reverse engineering assistant named G-3PO. I am going to show you some C code decompiled from a {lang} binary. You are to provide a high-level explanation of what that code does, in {style}, and try to infer its purpose. Explain your reasoning, step by step. Suggest informative variable names for any variable whose purpose is clear, and suggest an informative name for the function itself. Please print each suggested variable name on its own line using the format
    
$old -> $new

Then suggest a name for the function by printing it on its own line using the format

$old :: $new

If you observe any security vulnerabilities in the code, describe them in detail, and explain how they might be exploited. Do you understand?
""".format(lang=lang, style=LANGUAGE)
    system_msg = {"role": "system", "content": intro}
    ack_msg = {"role": "assistant", "content": "Yes, I understand. Please show me the code."}
    prompt_text = "Here is code from the function `{}`. Explain it step by step, rename unclear variables, and suggest a better function name:\n\n```c\n{}\n```".format(function_name, code)
    prompt_msg = {"role": "user", "content": prompt_text}
    return [system_msg, ack_msg, prompt_msg]

def generate_comment(code, function_name, temperature=0.19, program_info=None, model=MODEL, max_tokens=MAXTOKENS):
    prompt = build_prompt_for_function(code, function_name)
    logging.debug("Prompt:\n\n%s", prompt)
    return query(prompt, temperature, max_tokens, model)

# ======================================================
# Store raw AI response for parsing.
def add_explanatory_comment_to_current_function(temperature=0.19, model=MODEL, max_tokens=MAXTOKENS):
    function = get_current_function()
    if function is None:
        logging.error("Failed to get current function")
        return None
    function_name = function.getName()
    old_comment = function.getComment()
    if old_comment is not None:
        if OVERRIDE_COMMENTS or SOURCE in old_comment:
            logging.info("Removing old comment.")
            function.setComment(None)
        else:
            logging.info("Function {} already has a comment".format(function_name))
            return None
    code = get_code(function)
    if code is None:
        logging.error("Failed to {} current function {}".format("disassemble" if SEND_ASSEMBLY else "decompile", function_name))
        return
    approximate_tokens = estimate_number_of_tokens(code)
    logging.info("Length of decompiled C code: {} characters, guessing {} tokens".format(len(code), approximate_tokens))
    raw_comment = generate_comment(code, function_name,
                                   temperature=TEMPERATURE,
                                   model=MODEL,
                                   max_tokens=MAXTOKENS)
    if raw_comment is None or raw_comment.strip() == "":
        logging.error("LLM returned an empty response. Using fallback message.")
        raw_comment = "/* No explanation was produced by the AI. Please check the LLM configuration. */"
    else:
        logging.debug("Raw AI response:\n%s", raw_comment)
    decorated_comment = TAG + "\n" + raw_comment if not G3POSAY else g3posay(raw_comment)
    listing = currentProgram.getListing()
    func = listing.getFunctionContaining(currentAddress)
    try:
        func.setComment(decorated_comment)
    except DuplicateNameException as e:
        logging.error("Failed to set comment: {}".format(e))
        return
    logging.info("Added comment to function: {}".format(func.getName()))
    return raw_comment, code
# ======================================================

# ======================================================
# Modified renaming: skip suggestions not matching symbols.
def parse_response_for_vars(comment):
    regex = re.compile(r'[\$`]*\s*([A-Za-z_][A-Za-z_0-9]*)\s*[\$`]*\s*->\s*[\$`]*\s*([A-Za-z_][A-Za-z_0-9]*)')
    for line in comment.split('\n'):
        m = regex.search(line)
        if m:
            old, new = m.groups()
            logging.debug("Found suggestion to rename {} to {}".format(old, new))
            if old == new or new.lower() == 'new':
                continue
            yield old, new

def parse_response_for_function_name(comment):
    regex = re.compile(r'[\$`]*\s*([A-Za-z_][A-Za-z_0-9]*)\s*[\$`]*\s*::\s*[\$`]*\s*([A-Za-z_][A-Za-z_0-9]*)')
    for line in comment.split('\n'):
        m = regex.search(line)
        if m:
            logging.debug("Found function rename suggestion: %s", m.group(2))
            _, new = m.groups()
            return new

def rename_var(old_name, new_name, variables):
    try:
        var_to_rename = variables.get(old_name)
        if var_to_rename:
            var_to_rename.setName(new_name, SourceType.USER_DEFINED)
            var_to_rename.setComment('GP3O renamed this from {} to {}'.format(old_name, new_name))
            logging.debug('GP3O renamed variable {} to {}'.format(old_name, new_name))
        else:
            logging.debug('GP3O suggestion skipped: variable {} not found.'.format(old_name))
    except KeyError:
        pass

def rename_data(old_name, new_name):
    new_name = new_name.upper()
    address = int(old_name.strip('DAT_'), 16)
    sym = FLATAPI.getSymbolAt(FLATAPI.toAddr(address))
    sym.setName(new_name, SourceType.USER_DEFINED)
    logging.debug('GP3O renamed Data {} to {}'.format(old_name, new_name))

def rename_high_variable(symbols, old_name, new_name, data_type=None):
    if old_name not in symbols:
        logging.debug('GP3O suggestion skipped: variable {} not found in symbol table.'.format(old_name))
        return
    hv = symbols[old_name]
    if data_type is None:
        data_type = hv.getDataType()
    try:
        res = HighFunctionDBUtil.updateDBVariable(hv, new_name, data_type, SourceType.ANALYSIS)
        logging.debug("Renamed {} to {}".format(old_name, new_name))
        return res
    except DuplicateNameException as e:
        logging.error("Failed to rename {} to {}: {}".format(old_name, new_name, e))
        return None

def apply_renaming_suggestions(comment, code):
    logging.info('Renaming variables...')
    func = get_current_function()
    func_name = func.getName()
    new_func_name = None

    if RENAME_VARIABLES:
        raw_vars = [v for v in func.getAllVariables()]
        logging.debug("Available local symbols: %s", [v.getName() for v in raw_vars])
        variables = {var.getName(): var for var in raw_vars}
        logging.debug("Variables: %s", variables)

        options = DecompileOptions()
        monitor = ConsoleTaskMonitor()
        ifc = DecompInterface()
        ifc.setOptions(options)
        ifc.openProgram(func.getProgram())
        res = ifc.decompileFunction(func, TIMEOUT, monitor)
        high_func = res.getHighFunction()
        lsm = high_func.getLocalSymbolMap()
        symbols = lsm.getSymbols()
        symbols = {var.getName(): var for var in symbols}
        logging.debug("Symbols: %s", symbols)

        for old, new in parse_response_for_vars(comment):
            if re.match(r"^DAT_[0-9a-f]+$", old):
                try:
                    rename_data(old, new)
                except Exception as e:
                    logging.error("Failed to rename data: {}".format(e))
            elif old in symbols and symbols[old] is not None:
                try:
                    rename_high_variable(symbols, old, new)
                except Exception as e:
                    logging.error("Failed to rename variable: {}".format(e))
            elif old == func_name:
                new_func_name = new
            else:
                logging.debug("Skipping suggestion: {} -> {} not found in symbol table.".format(old, new))
    if func.getName().startswith("FUN_") or RENAME_FUNCTION:
        fn = parse_response_for_function_name(comment)
        new_func_name = fn or new_func_name
        if new_func_name:
            func.setName(new_func_name, SourceType.USER_DEFINED)
            logging.debug("GP3O renamed function to %s", new_func_name)

# ======================================================
# Main Entry Point: Generate comment and optionally apply renaming suggestions.
raw_comment, code = add_explanatory_comment_to_current_function(temperature=0.19, model=MODEL, max_tokens=MAXTOKENS)

if raw_comment is not None and (RENAME_FUNCTION or RENAME_VARIABLES):
    apply_renaming_suggestions(raw_comment, code)
