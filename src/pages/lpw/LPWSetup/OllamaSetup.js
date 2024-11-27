import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const OllamaSetup = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Installing Ollama</h1>
        
        <section>
          <h2>What is Ollama?</h2>
          <div className="mb-6">
            <img 
              src="/images/ollama-logo.jpg" 
              alt="Ollama Logo" 
              className="mb-4"
            />
            <p className="mb-4">
              Ollama is an open-source platform designed to make large language models
              (LLMs) more accessible and user-friendly for developers and researchers.
              It serves as a centralized hub for discovering, downloading, and
              integrating pre-trained LLMs into various projects.
            </p>
          
            <p className="mb-4">
              At its core, Ollama aims to bridge the gap between the complex world of
              LLMs and the developers who want to leverage their power without dealing
              with the intricacies of model training and deployment. By providing a 
              user-friendly interface and a curated collection of pre-trained models, 
              Ollama simplifies the process of incorporating LLMs into applications.
            </p>
          
            <p className="mb-4">
              One of the key features of Ollama is its model repository. The Ollama 
              website hosts a wide range of pre-trained LLMs that can be easily explored 
              and downloaded. These models cover various domains and tasks, such as 
              natural language processing, text generation, and more. Developers can 
              browse through the available models, read their descriptions, and select 
              the ones that best suit their project requirements.
            </p>

            <img 
              src="/images/ollama-models.png" 
              alt="Ollama Models" 
              className="mb-8"
            />
          </div>
        </section>

        <section>
          <h2>Why Ollama?</h2>
          <h3 className="mb-3">Integrating Ollama with Local Packet Whisperer (LPW)</h3>
          <p className="mb-4">
            Local Packet Whisperer (LPW) is a powerful tool that harnesses the 
            capabilities of Ollama to perform packet capture (PCAP) analysis. One of 
            the key advantages of this integration is the ability to run LLMs locally, 
            ensuring data privacy and offline functionality. By leveraging Ollama, LPW 
            enables users to analyze packet data without relying on external APIs or 
            services, maintaining complete control over their data and eliminating the 
            need for internet connectivity during the analysis process.
          </p>
          
          <p className="mb-4">
            The integration of Ollama and LPW prioritizes simplicity and ease of use. 
            LPW seamlessly incorporates Ollama's pre-trained models and user-friendly 
            interface into its workflow, making it extremely straightforward for users 
            to set up and start analyzing packet data with the power of LLMs. The 
            combination of Ollama and LPW empowers users to perform efficient and 
            insightful PCAP analysis without the need for extensive machine learning 
            expertise or complex configurations.
          </p>
          
          <p className="mb-6">
            Moreover, the offline functionality of LPW, enabled by Ollama, allows users 
            to perform PCAP analysis even in environments with limited or no internet 
            connectivity. This is especially valuable for field operations, incident 
            response teams, or scenarios where network access is restricted. Users can 
            easily set up LPW on their local machines and start analyzing packet data 
            immediately, without any dependencies on external resources. With LPW, users 
            can rest assured that their data remains secure and confidential, as the 
            local execution of LLMs ensures that sensitive packet information never 
            leaves the user's environment, providing an additional layer of security.
          </p>
        </section>

        <section>
          <h2>Installation Steps</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              Visit <a href="https://ollama.ai" className="text-blue-600 hover:underline">ollama.ai</a>
            </li>
            <li>Download and install the appropriate version for your operating system</li>
            <li>
              If Ollama is not already running, use the following command to start Ollama:
              <CopyCodeButton code="ollama serve" />
            </li>
            <li>
              Open a new terminal window and run:
              <CopyCodeButton code="ollama pull dolphin-mistral:latest" />
              <p className="mt-2">This will download a LLM model for LPW to use</p>
            </li>
          </ol>
        </section>

        <NavButtons 
          previous={{
            text: "Installing Python and Wireshark",
            link: "/lpw/python-wireshark"
          }}
          next={{
            text: "Setting up Virtual Environment",
            link: "/lpw/venv"
          }}
        />
      </div>
    </LPWLayout>
  );
};

export default OllamaSetup;
