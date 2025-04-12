import React from 'react';
import NavButtons from '../../components/shared/NavButtons';
import G3POLayout from '../../components/layout/G3POLayout';

const GhidraInstallation = () => {
  return (
    <G3POLayout>
      <h1>Use Case Example</h1>

      
      <section>
        <h2>Simple Program</h2>
        <p>
        Consider the simple C program shown below. At a high level, its structure and logic are straightforward, making it easy to understand and interpret. However, when compiled into machine code, the level of abstraction is lost, requiring reverse engineering techniques to analyze its functionality. 
        </p>


        <img src="/images/Jack/simpleCode.png" alt="Example Code" width="700" height="auto" />
      

    <h2>After Decompilation</h2>
        <img src="/images/Jack/beforeAI.png" alt="Example Code" width="700" height="auto" />


        <p>
        After the decompilation process of its executable, Ghidra reconstructs a high-level representation of the program, displaying both assembly instructions (left) and decompiled C-like code (right). The assembly view shows low-level operations like MOV, CALL, and JMP, while the decompiled output attempts to restore function structures. However, due to compiler optimizations, variable names and some control structures are lost, requiring manual analysis. Reverse engineers use this output to understand program logic, identify vulnerabilities, and analyze potential threats by refining function names, defining data types, and reconstructing execution flow.        </p>

        <h2>With G3PO</h2>
        <img src="/images/Jack/SecondPart.png" alt="Assisted Code" width="700" height="auto" />
        <p>
        From the image, we can see that a prompt was generated and processed by the Ollama LLM, providing an analysis of the decompiled function. The LLM explains the function’s purpose, breaking it down into steps such as parsing the import table, iterating through entries, and retrieving library names. This confirms that G3PO is successfully interacting with the LLM to generate automated insights, making reverse engineering more efficient by providing context and explanations directly within Ghidra.

        </p>
      </section>

      <section>
        <h2>G3PO Documentation</h2>
        <a href='https://github.com/tenable/ghidra_tools/blob/main/g3po/g3po.py'><pre><code>https://github.com/tenable/ghidra_tools/blob/main/g3po/g3po.py</code></pre></a>
      </section>
      <NavButtons 
          previous = {{
            link: "/g3po/docker/ollama",
            text: "Ollama with Docker Setup"
          }}
          next={{
            link: "/g3po/docker/ollama/ghidra/script",
            text: "G3PO Script"
          }}
        />
    </G3POLayout>
  );
};

export default GhidraInstallation;