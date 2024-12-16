import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CollapsibleCode from '../../../components/shared/CollapsibleCode';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const EnhanceLPW = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Enhancing LPW Processing Speed</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            While Local Packet Whisperer (LPW) provides powerful packet analysis capabilities through LLMs,
            its default processing method can be optimized for better performance. By default, LPW converts
            PCAP files into raw text format, which includes a significant amount of redundant data and
            requires more processing power to analyze. However, by implementing a custom packet extractor,
            we can transform the data into a streamlined JSON format that focuses on the most relevant
            information.
          </p>
          <p className="mb-6">
            Note that the LPW changes we go over below is unoptimized and rather a demonstration of the 
            possible ways to enhance LLMs. In our enhancement, we change the default packet processing which takes 
            time and provides too much informationand cut it down to what is necessary and is easy for the LLM to read.
            When following our example, you will see that a pcap to json script can make the program run quite a bit faster.
            You may also find that with further optimizations, a fully functioning tool could be made. While this exercise
            does not go past the base level enhancements, feel free to test it out yourselves in creating a robust AI 
            enhanced packet analysis tool.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Understanding the Enhancement</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Default LPW Processing</h3>
              <p>
                Converts PCAP to raw text format:
              </p>
              <ul className="list-disc ml-4 mt-2">
                <li>Contains all packet information</li>
                <li>Includes redundant data</li>
                <li>Slower processing time</li>
                <li>More complex for LLMs to analyze</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-green-50">
              <h3 className="text-lg font-semibold mb-2">Enhanced Processing</h3>
              <p>
                Converts PCAP to structured JSON:
              </p>
              <ul className="list-disc ml-4 mt-2">
                <li>Contains only relevant fields</li>
                <li>Structured, clean format</li>
                <li>Faster processing speed</li>
                <li>Easier for LLMs to analyze</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Implementation Guide</h2>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Step 1: Create the Python Script</h3>
              <p className="mb-4">Create a new file named packet_extractor.py in your LPW directory:</p>
              <CopyCodeButton code="touch packet_extractor.py" />
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Step 2: Add the Code</h3>
              <p className="mb-4">Copy and paste the following code into packet_extractor.py:</p>
              <CollapsibleCode code={`import json
import logging
import os
import subprocess
from datetime import datetime

logging.basicConfig(
    level=logging.WARNING,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

class PCAPExtractor:
    def __init__(self, pcap_file, debug_mode=False):
        self.pcap_file = pcap_file
        self.debug_mode = debug_mode
        if debug_mode:
            logging.getLogger().setLevel(logging.INFO)
        self.tshark_path = self._find_tshark()

    def _find_tshark(self):
        """Find TShark executable path"""
        if os.name == 'nt':  # Windows
            default_paths = [
                r"C:/Program Files/Wireshark/tshark.exe",
                r"C:/Program Files (x86)/Wireshark/tshark.exe"
            ]
            for path in default_paths:
                if os.path.exists(path):
                    return path
        else:  # Linux/Mac
            try:
                result = subprocess.run(['which', 'tshark'], 
                                     capture_output=True, 
                                     text=True, 
                                     check=True)
                if result.stdout:
                    return result.stdout.strip()
            except subprocess.CalledProcessError:
                pass
        
        raise FileNotFoundError("TShark not found. Please install Wireshark/TShark")

    def _run_tshark_command(self, display_filter=None):
        """Run TShark command and get JSON output"""
        fields = [
            "-e", "frame.time_epoch",
            "-e", "frame.number",
            "-e", "frame.len",
            "-e", "frame.protocols",
            "-e", "ip.src",
            "-e", "ip.dst",
            "-e", "ip.proto",
            "-e", "tcp.srcport",
            "-e", "tcp.dstport",
            "-e", "tcp.flags",
            "-e", "tcp.seq",
            "-e", "tcp.ack",
            "-e", "udp.srcport",
            "-e", "udp.dstport",
            "-e", "udp.length",
            "-e", "http.request.method",
            "-e", "http.request.uri",
            "-e", "http.user_agent",
            "-e", "http.response.code",
            "-e", "dns.qry.name",
            "-e", "dns.qry.type",
            "-e", "tls.handshake.type",
            "-e", "tls.record.version"
        ]

        cmd = [
            self.tshark_path,
            '-r', self.pcap_file,
            '-T', 'fields',  # Use fields format for direct value extraction
            '-E', 'separator=|',  # Use pipe as separator
            '-E', 'quote=n',  # No quotes
            '-E', 'header=y'  # Include headers
        ] + fields

        if display_filter:
            cmd.extend(['-Y', display_filter])

        if self.debug_mode:
            logging.info(f"Running TShark command: {' '.join(cmd)}")

        try:
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                check=True
            )
            
            # Parse the field output
            lines = result.stdout.strip().split('\n')
            headers = lines[0].split('|')
            packets = []
            
            for line in lines[1:]:
                values = line.split('|')
                packet = dict(zip(headers, values))
                packets.append(packet)
                
            return packets
            
        except subprocess.CalledProcessError as e:
            logging.error(f"TShark error: {e.stderr}")
            raise
        except Exception as e:
            logging.error(f"Error running TShark: {e}")
            raise

    def _process_packet(self, packet_data):
        """Process a single packet from TShark field output"""
        try:
            processed = {
                'timestamp': float(packet_data.get('frame.time_epoch', 0)),
                'frame_number': int(packet_data.get('frame.number', 0)),
                'frame_len': int(packet_data.get('frame.len', 0)),
                'protocols': packet_data.get('frame.protocols', '')
            }

            # IP information
            if packet_data.get('ip.src'):
                processed.update({
                    'ip_src': packet_data.get('ip.src', ''),
                    'ip_dst': packet_data.get('ip.dst', ''),
                    'ip_proto': int(packet_data.get('ip.proto', 0))
                })

            # TCP information
            tcp_src = packet_data.get('tcp.srcport')
            if tcp_src:
                processed['tcp'] = {
                    'src_port': int(tcp_src),
                    'dst_port': int(packet_data.get('tcp.dstport', 0)),
                    'flags': packet_data.get('tcp.flags', ''),
                    'seq': int(packet_data.get('tcp.seq', 0)),
                    'ack': int(packet_data.get('tcp.ack', 0))
                }

            # UDP information
            udp_src = packet_data.get('udp.srcport')
            if udp_src:
                processed['udp'] = {
                    'src_port': int(udp_src),
                    'dst_port': int(packet_data.get('udp.dstport', 0)),
                    'length': int(packet_data.get('udp.length', 0))
                }

            # HTTP information
            http_method = packet_data.get('http.request.method')
            if http_method:
                processed['http'] = {
                    'method': http_method,
                    'uri': packet_data.get('http.request.uri', ''),
                    'user_agent': packet_data.get('http.user_agent', ''),
                    'response_code': packet_data.get('http.response.code', '')
                }

            # DNS information
            dns_qry = packet_data.get('dns.qry.name')
            if dns_qry:
                processed['dns'] = {
                    'qry_name': dns_qry,
                    'qry_type': packet_data.get('dns.qry.type', '')
                }

            # TLS information
            tls_type = packet_data.get('tls.handshake.type')
            if tls_type:
                processed['tls'] = {
                    'handshake_type': tls_type,
                    'version': packet_data.get('tls.record.version', '')
                }

            return processed

        except Exception as e:
            logging.warning(f"Error processing packet: {e}")
            return None

    def process_pcap(self, display_filter=None, max_packets=None):
        """Process PCAP and return structured data"""
        try:
            raw_packets = self._run_tshark_command(display_filter)
            packets = []
            
            for i, pkt in enumerate(raw_packets):
                if max_packets and i >= max_packets:
                    break
                    
                processed = self._process_packet(pkt)
                if processed:
                    packets.append(processed)

            metadata = {
                'file_name': os.path.basename(self.pcap_file),
                'file_size': os.path.getsize(self.pcap_file),
                'packet_count': len(packets),
                'extraction_time': datetime.now().isoformat(),
                'display_filter': display_filter,
                'max_packets_limit': max_packets
            }

            return {
                'metadata': metadata,
                'packets': packets
            }

        except Exception as e:
            logging.error(f"Error processing PCAP: {e}")
            if self.debug_mode:
                logging.error(f"TShark path: {self.tshark_path}")
                logging.error(f"Display filter: {display_filter}")
            raise

def get_pcap_json(pcap_file, display_filter=None, max_packets=None, debug_mode=False):
    """Utility function for quick extraction"""
    try:
        extractor = PCAPExtractor(pcap_file, debug_mode=debug_mode)
        return extractor.process_pcap(display_filter=display_filter, max_packets=max_packets)
    except Exception as e:
        logging.error(f"Failed to process PCAP: {e}")
        return None`} />
        <h3 className="text-lg font-semibold mb-3">Step 3: Replace Dependent Code</h3>
        <p className="mb-4">Copy and paste the following code into lpw_home.py:</p>
              <CollapsibleCode code={`
              import streamlit as st
from lpw_init import *
from lpw_prompt import *
from lpw_packet import *
#from lpw_settings import loadDefaultSettings
import os
import time
from streamlit_extras.tags import tagger_component

#st.set_page_config(page_title='Local Packet Whisperer', page_icon='🗣️')

lpw_avatar = "https://raw.githubusercontent.com/kspviswa/local-packet-whisperer/main/gifs/lpw_logo_small.png"

#loadDefaultSettings()
#returnValue['selected_model'] = getModelList()[0]

def loadDefaultSettings():
    st.session_state['selected_model'] = getModelList()[0]

def getFiltersAndDecodeInfo():
    filters = []
    decodes = {}
    resp = ""
    if returnValue('http'):
        filters.append("tcp.port == 80")
        decodes['tcp.port == 80'] = 'http'
    if returnValue('snmp'):
        filters.append("udp.port == 161 || udp.port == 162")
        decodes['udp.port == 161'] = 'snmp'
        decodes['udp.port == 162'] = 'snmp'
    if returnValue('https'):
        filters.append("tcp.port == 443")
        decodes['tcp.port == 443'] = 'https'
    if returnValue('ntp'):
        filters.append("udp.port == 123")
        decodes['udp.port == 123'] = 'ntp'    
    if returnValue('ftp'):
        filters.append("tcp.port == 21")
        decodes['tcp.port == 21'] = 'ftp'
    if returnValue('ssh'):
        filters.append("tcp.port == 22")
        decodes['tcp.port == 22'] = 'ssh'
    if returnValue('ngap'):
        filters.append("sctp.port == 38412")
        decodes['stcp.port == 38412'] = 'ngap'
    
    l = len(filters)
    i=0
    for f in filters:
        resp += f 
        i += 1
        if i != l:
            resp += " || "
    return resp, decodes

def resetChat():
    returnValue('messages').clear()
    clearHistory()

def getEnabledFilters():
    filters = []
    if returnValue('http'):
        filters.append('http')
    if returnValue('snmp'):
        filters.append('snmp')
    if returnValue('https'):
        filters.append('https')
    if returnValue('ntp'):
        filters.append('ntp')   
    if returnValue('ftp'):
        filters.append('ftp')
    if returnValue('ssh'):
        filters.append('ssh')
    if returnValue('ngap'):
        filters.append('ngap')
    
    if len(filters) < 1:
        return None
    return tagger_component('Enabled Filters', tags=filters, color_name='blue')

with st.sidebar:
    if returnValue('selected_model') == 'Undefined':
        loadDefaultSettings()
    st.metric("Selected Model ✅", returnValue('selected_model'))
    st.metric("Connected to 🔌", returnValue('llm_server'))
    getEnabledFilters()
    st.metric("Streaming 〰️", returnValue('streaming_enabled'))

col1, col2 = st.columns([3,1])
with col1:
    st.markdown('# :rainbow[Local Packet Whisperer] \n # :rainbow[🗣️🗣️🗣️]')
with col2:
    st.image(image=lpw_avatar, use_column_width=True)

st.markdown('#### Step 1️⃣ 👉🏻 Build a knowledge base')
packetFile = st.file_uploader(label='Upload either a PCAP or PCAPNG file to chat', accept_multiple_files=False, type=['pcap','pcapng'])
st.markdown('#### Step 2️⃣ 👉🏻 Chat with packets')
if packetFile == None:
    st.session_state['pcap_fname'] = "None 🚫"
    resetChat()
    st.markdown('#### Waiting for packets 🧘🏻🧘🏻🧘🏻🧘🏻')
else:
    st.session_state['pcap_fname'] = packetFile.name
    st.sidebar.metric("Whispering with 🗣️", returnValue('pcap_fname'))
    with st.spinner('#### Crunching the packets... 🥣🥣🥣'):
        with open(f'{packetFile.name}', 'wb') as f:
            f.write(packetFile.read())
        filters, decodes = getFiltersAndDecodeInfo()
        initLLM(pcap_data=getPcapData(input_file=f'{packetFile.name}', filter=filters, decode_info=decodes))
        os.remove(f'{packetFile.name}')
    with st.chat_message(name='assistant', avatar=lpw_avatar):
        st.markdown('Chat with me..')
    for message in returnValue('messages'):
        with st.chat_message(name=message['role'], avatar = lpw_avatar if message['role'] == 'assistant' else None):
            st.markdown(message['content'])
    if prompt := st.chat_input('Enter your prompt'):
        returnValue('messages').append({'role' : 'user', 'content' : prompt})
        with st.chat_message(name='user'):
            st.markdown(prompt)
        with st.chat_message(name='assistant', avatar=lpw_avatar):
            with st.spinner('Processing....'):
                full_response = chatWithModel(prompt=prompt, model=returnValue('selected_model'))
                returnValue('messages').append({'role' : 'assistant', 'content' : full_response})
                if returnValue('streaming_enabled'):
                    message_placeholder = st.empty()
                    streaming_response = ""
                    # Simulate stream of response with milliseconds delay
                    for chunk in full_response.split():
                        streaming_response += chunk + " "
                        time.sleep(0.05)
                        # Add a blinking cursor to simulate typing
                        message_placeholder.markdown(streaming_response + "▌", unsafe_allow_html=True)
                    message_placeholder.markdown(full_response, unsafe_allow_html=True)
                else:
                    st.markdown(full_response)
        st.button('Reset Chat 🗑️', use_container_width=True, on_click=resetChat)
                `} />
        <p className="mb-4">Copy and paste the following code into lpw_packet.py:</p>
              <CollapsibleCode code={`import streamlit as st
import os
import asyncio
from lpw_extractor import get_pcap_json
import json

def getPcapData(input_file:str = "", filter="", decode_info={}):
    try:
        if os.name == 'nt':
            eventloop = asyncio.ProactorEventLoop()
            asyncio.set_event_loop(eventloop)
            
        # First try without debug mode
        extraction = get_pcap_json(input_file, display_filter=filter, debug_mode=False)
        
        # If failed, retry with debug mode
        if extraction is None:
            st.warning("Initial processing failed, retrying with debug mode...", icon="⚠️")
            extraction = get_pcap_json(input_file, display_filter=filter, debug_mode=True)
        
        if extraction is None:
            st.error('Failed to process PCAP file', icon='🚨')
            st.info("""
            Possible issues:
            1. TShark/Wireshark not installed properly
            2. Display filter syntax error
            3. Corrupted PCAP file
            4. Insufficient permissions
            
            Please check:
            1. Wireshark is installed and in PATH
            2. The PCAP file opens in Wireshark
            3. Run 'tshark -v' to verify installation
            """)
            st.warning(body='LPW is now stopped', icon='🛑')
            st.stop()
            
        return json.dumps(extraction, indent=2)
        
    except Exception as e:
        st.error(f'Error processing PCAP file: {e}', icon='🚨')
        st.stop()
                `} />
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Step 4: Restart LPW</h3>
              <p>
                After implementing the packet extractor, restart LPW to apply the changes. The tool will
                now automatically use the optimized JSON format for packet processing. Try doing a packet
                analysis now and see the difference from before. The result it provides will be more focused 
                on the packet and will work alot quicker. 
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Benefits of the Enhanced Processing</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-2">
              <li><strong>Improved Speed:</strong> Processing JSON is significantly faster than parsing raw text</li>
              <li><strong>Better Structure:</strong> Data is organized in a clear, hierarchical format</li>
              <li><strong>Reduced Noise:</strong> Only relevant packet information is included</li>
              <li><strong>Enhanced Analysis:</strong> LLMs can more easily identify patterns and anomalies</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <div className="p-4 rounded-lg">
            <ul className="space-y-2">
              <li><strong>Flexible Data Extraction:</strong> Captures key packet information including timestamps, IPs, ports, and protocols</li>
              <li><strong>Protocol Support:</strong> Handles TCP, UDP, and DNS protocols</li>
              <li><strong>Error Handling:</strong> Includes robust error checking and reporting</li>
              <li><strong>Command Line Support:</strong> Can be run directly from the command line</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
            <p>
              This enhancement significantly improves LPW's processing capabilities while maintaining
              all the benefits of LLM-based analysis. The structured JSON format not only speeds up
              processing but also provides a cleaner foundation for detailed packet analysis. However, 
              as mentioned previously, the packet extractor is not optimized and can be improved to 
              transform LPW into a well working packet analysis tool. Try go into the packet extractor script 
              and try optimizing it yourselves!
            </p>
          </div>
        </section>

        <NavButtons 
          previous={{
            text: "Understanding LLMs",
            link: "/lpw/understandingLLMS"
          }}
        />
      </div>
    </LPWLayout>
  );
};

export default EnhanceLPW;
