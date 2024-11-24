// src/pages/lpw/LPWLanding.js
import React from 'react';
import LPWLayout from '../../components/layout/LPWLayout';

const LPWLanding = () => {
  return (
    <LPWLayout>
      <h1>Guide to using Local Packet Whisperer (LPW)</h1>
      
      <section>
        <h2>Introduction</h2>
        <p>
          In this module, we will explore the transformative potential of Large Language Models (LLMs) 
          in streamlining packet capture (PCAP) analysis. Traditional PCAP analysis can be a 
          time-consuming and demanding process, especially as data volumes continue to grow.
        </p>

        <h2>The Power of LLMs in PCAP Analysis</h2>
        <p>
          LLMs, with their ability to understand and generate human-like text, offer a unique 
          opportunity to enhance PCAP analysis. These models can efficiently scan and interpret large 
          datasets, rapidly identifying patterns, connections, and potential anomalies that may be 
          overlooked in manual analysis.
        </p>

        <h2>Benefits for Cyber Analysts</h2>
        <ul>
          <li>
            <strong>Efficiency:</strong> Automates initial analysis process, enabling quick identification 
            of relevant information and potential threats.
          </li>
          <li>
            <strong>Accessibility:</strong> Natural language interface makes PCAP analysis more 
            accessible to analysts at all skill levels.
          </li>
          <li>
            <strong>Local Control:</strong> Run entirely locally to ensure data privacy and security.
          </li>
          <li>
            <strong>Customization:</strong> Integration with Ollama allows selection and customization 
            of LLMs to suit specific needs.
          </li>
        </ul>
      </section>
    </LPWLayout>
  );
};

export default LPWLanding;