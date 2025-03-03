import React from 'react';
import NavButtons from '../../components/shared/NavButtons';
import G3POLayout from '../../components/layout/G3POLayout';

const G3POLanding = () => {
  return (
    <G3POLayout>
      <h1>Guide to Using G3PO</h1>

<section>
  <h2>Introduction</h2>
  <p>
    In this module, we will explore how Large Language Models (LLMs) can be integrated into reverse engineering workflows 
    using G3PO, a Ghidra script that leverages AI to assist in analyzing decompiled code. G3PO enhances a security 
    professional’s ability to understand complex functions. 
    
    By incorporating LLMs like Ollama, we can provide an AI-powered assistant within Ghidra, helping cybersecurity 
    professionals extract deeper insights into compiled binaries. This guide will demonstrate how to integrate G3PO with LLMs 
    and leverage them to streamline reverse engineering workflows.
  </p>

  <h2>Using LLMs for Code Analysis</h2>
  <p>
    G3PO utilizes LLMs to interpret, summarize, and analyze decompiled functions in plain language. Instead of manually 
    investigating each function, an LLM can provide contextual insights, highlight potential vulnerabilities, and 
    suggest meaningful function names for enhanced readability.
  </p>
  <p>
    This is achieved through AI embeddings, where decompiled code is converted into a numerical format, allowing the 
    LLM to understand patterns, recognize code structures, and offer intelligent suggestions. When combined with 
    retrieval-augmented generation (RAG), G3PO can query a local reverse engineering knowledge base, ensuring 
    that AI-powered insights are based on security-approved data sources.
  </p>

  <h2>Benefits for Reverse Engineers</h2>
  <ul>
    <li>
      <strong>Automated Code Analysis:</strong> Instantly generate summaries of decompiled functions.
    </li>
    <li>
      <strong>Efficient Reverse Engineering:</strong> Reduce time spent manually renaming and structuring functions.
    </li>
    <li>
      <strong>Enhanced Threat Detection:</strong> Identify potential vulnerabilities in binaries with AI assistance.
    </li>
    <li>
      <strong>Local AI Processing:</strong> Ensure security and privacy by running everything on a local Ollama instance.
    </li>
    <li>
      <strong>Customizable AI Models:</strong> Fine-tune G3PO to focus on specific reverse engineering tasks.
    </li>
  </ul>
</section>

      <NavButtons 
          next={{
            link: "/g3po/g3po-introduction",
            text: "What is G3PO?"
          }}
          singleButtonPosition="right"
        />
    </G3POLayout>
  );
};

export default G3POLanding;