import React from 'react';
import LPWLayout from '../../components/layout/LPWLayout';
import NavButtons from '../../components/shared/NavButtons';
import CodeBlock from '../../components/shared/CodeBlock';

const OllamaSetup = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Installing Ollama</h1>
        
        <section>
          <div className="mb-6">
            <img 
              src="/images/ollama-logo.jpg" 
              alt="Ollama Logo" 
              className="mb-4"
            />
            <p>
              Ollama is an open-source platform designed to make large language models
              (LLMs) more accessible and user-friendly for developers and researchers.
              It serves as a centralized hub for discovering, downloading, and
              integrating pre-trained LLMs into various projects.
            </p>
          </div>

          <p className="mb-6">
            At its core, Ollama aims to bridge the gap between the complex world of
            LLMs and the developers who want to leverage their power without dealing
            with the intricacies of model training and deployment.
          </p>

          <img 
            src="/images/ollama-models.png" 
            alt="Ollama Models" 
            className="mb-8"
          />
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
              <CodeBlock code="ollama serve" />
            </li>
            <li>
              Open a new terminal window and run:
              <CodeBlock code="ollama pull dolphin-mistral:latest" />
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
