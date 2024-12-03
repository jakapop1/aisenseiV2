// src/pages/lpw/LPWLanding.js
import React from 'react';
import LPWLayout from '../../components/layout/LPWLayout';
import NavButtons from '../../components/shared/NavButtons';

const LPWLanding = () => {
  return (
    <LPWLayout>
      <div classname="lpw-content">
        <h1>Guide to using Local Packet Whisperer (LPW)</h1>
        <section>
          <h2>Introduction</h2>
          <img 
              src="/images/ChatGPT-logo.jpg" 
              alt="ChatGPT-logo" 
              className="float-right mr-6 mb-4 w-[100px] rounded-lg shadow-md"
            />
          <p>
          In this module, we will explore the transformative potential of Large Language Models (LLMs) in streamlining 
          packet capture (PCAP) analysis. Traditional PCAP analysis can be a time-consuming and demanding process, 
          especially as data volumes continue to grow. It often requires the creation and application of precise filters 
          and extensive manual effort to identify relevant information and potential anomalies. However, by leveraging 
          the power of LLMs, we can revolutionize this process, making it more efficient, accessible, and insightful 
          for cyber analysts at all skill levels.
          </p>
          <h2>The Power of LLMs in PCAP Analysis</h2>
          <p>
          LLMs, with their ability to understand and generate human-like text, offer a unique opportunity to enhance PCAP analysis.
          These models can efficiently scan and interpret large datasets, rapidly identifying patterns, connections, and potential 
          anomalies that may be overlooked in manual analysis. By automating the initial analysis process, LLMs can significantly  
          reduce the time and effort required to sift through vast amounts of packet data.
          </p>
          <p>
          One of the key advantages of using LLMs in PCAP analysis is their ability to bridge the knowledge gap for newer analysts. 
          LLMs can provide clear, contextually relevant insights and guidance, enabling analysts to perform effective analysis without 
          requiring years of experience. The models can highlight important findings, suggest areas for further investigation, 
          and offer explanations for complex network behaviors. This empowers analysts to quickly grasp the significance of the data 
          and make informed decisions.
          </p>

          <h2>Introducing Local Packet Whisperer (LPW):</h2>
          <img 
              src="/images/lpw-logo.png" 
              alt="LPW-logo" 
              className="float-left mr-6 mb-4 w-[210px] rounded-lg shadow-md"
            />
          <p>
            Local Packet Whisperer (LPW) is an open source AI tool that harnesses the power of LLMs for PCAP analysis while prioritizing 
            data privacy and local control. LPW allows analysts to interact with PCAP files using natural language queries, 
            making the analysis process more intuitive and accessible.
          </p>
          <p>
          One of the standout features of LPW is its ability to run entirely locally, without requiring an internet connection. 
          This means that analysts can input proprietary or sensitive information into LPW without any data leaving their local environment. 
          By keeping the analysis process self-contained, LPW ensures the confidentiality and security of the data being examined.
          </p>
          <p>
          LPW integrates with Ollama, an open-source platform that simplifies the deployment and utilization of LLMs. With Ollama, 
          analysts can choose from a range of pre-trained LLMs and customize them to suit their specific analysis needs. 
          This flexibility allows analysts to select models that are optimized for network analysis, anomaly detection, or other relevant tasks.
          </p>

          <h2>Benefits for Cyber Analysts</h2>
          <p>LPW offers several compelling benefits for cyber analysts:  </p>
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
        <NavButtons 
          next={{
            link: "/lpw/python-wireshark",
            text: "Installing Python and Wireshark"
          }}
          singleButtonPosition="right"
        />
      </div>
    </LPWLayout>
  );
};

export default LPWLanding;