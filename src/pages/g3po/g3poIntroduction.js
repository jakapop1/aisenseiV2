import React from 'react';
import G3POLayout from '../../components/layout/G3POLayout';
import NavButtons from '../../components/shared/NavButtons';

const G3POIntro = () => {
  return (
    <G3POLayout>
      <h1>What Is G3PO?</h1>
      
      <section>
        <p>
          G3PO is a Ghidra extension that leverages Large Language Models (LLMs) to assist in reverse engineering and code analysis. 
          By integrating AI into the decompilation workflow, G3PO enhances a security professional’s ability to understand, document, 
          and analyze assembly code more efficiently. It helps automate tedious tasks such as function and vulnerability 
          identification by generating explanations of decompiled code. 
        </p>

        <blockquote>
          “G3PO is designed to improve reverse engineering workflows by utilizing AI to interpret, annotate, and explain 
          decompiled functions in plain language.” 
          <footer>- <a href='https://github.com/tenable/ghidra_tools/blob/main/g3po/g3po.py'>G3PO GitHub Repository</a></footer>
        </blockquote>
	
        <p>
          Traditionally, reverse engineering requires manually read through of unknown functions, and structuring code for readability, 
          and cross-referencing documentation to identify possible vulnerabilities. G3PO enhances this workflow by incorporating 
          AI-driven insights, allowing engineers to interact with decompiled code in a more intuitive way. 
        </p>

        <h2>Why Use G3PO?</h2>
        <p>
          G3PO offers a seamless integration with Ghidra, enhancing the existing reverse engineering process with AI-powered 
          automation. By leveraging LLMs like Ollama, analysts can interact with decompiled code in a natural language format, 
          receive instant function summaries, and highlight potential vulnerabilities in an automated yet interpretable manner locally.
        </p>

        <h2>
          Key Benefits of Using G3PO:
        </h2>
        <ul>
          <li><strong>AI-Assisted Code Analysis:</strong> Automatically generate function explanations.</li>
          <li><strong>Enhanced Threat Detection:</strong> Identify potential vulnerabilities within decompiled binaries faster.</li>
          <li><strong>Automated Workflow:</strong> Reduce manual effort by letting AI assist in documentation and structuring.</li>
          <li><strong>Local AI Integration:</strong> Works with Ollama to ensure data privacy while providing real-time AI assistance.</li>
          <li><strong>Seamless Ghidra Support:</strong> Designed to enhance, not replace traditional reverse engineering workflows.</li>
        </ul>

        <h2>See the Full G3PO Documentation</h2>
        <a href="https://github.com/tenable/ghidra_tools/blob/main/g3po/g3po.py">https://github.com/tenable/ghidra_tools/blob/main/g3po/g3po.py</a>
      </section>
      
      <NavButtons 
          previous={{
            link: "/g3po",
            text: "Introduction to G3PO"
          }}
          next={{
            link: "/g3po/g3po-introduction/g3po-example",
            text: "G3PO Example Usage"
          }}
        />
    </G3POLayout>
  );
};

export default G3POIntro;
