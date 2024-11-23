import React from 'react';
import CodeBlock from '../../components/shared/CodeBlock';
import NavButtons from '../../components/shared/NavButtons';

const OllamaSetup = () => {
  return (
    <div role="main">
      <h2>Installing Ollama</h2>

      <section className="intro-section">
        <img src="/images/ollama-logo.jpg" alt="Ollama Logo" />
        <p>
          Ollama is an open-source platform designed to make large language models
          (LLMs) more accessible and user-friendly for developers and researchers.
          It serves as a centralized hub for discovering, downloading, and
          integrating pre-trained LLMs into various projects.
        </p>
      </section>

      <p>
        At its core, Ollama aims to bridge the gap between the complex world of
        LLMs and the developers who want to leverage their power without dealing
        with the intricacies of model training and deployment.
      </p>

      <img src="/images/ollama-models.png" alt="Ollama Models" className="model-image" />

      <section>
        <h3>Installation Steps</h3>
        <ol>
          <li>Visit ollama.ai</li>
          <li>Download and install the appropriate version for your operating system</li>
          <li>
            If Ollama is not already running, use the following command to start Ollama:
            <CodeBlock code="ollama serve" />
          </li>
          <li>
            Open a new terminal window and run:
            <CodeBlock code="ollama pull dolphin-mistral:latest" />
            This will download a LLM model for LPW to use
          </li>
        </ol>
      </section>

      <NavButtons 
        previous={{ text: "Installing Python and Wireshark", link: "/lpw/python-wireshark" }}
        next={{ text: "Setting up Virtual Environment", link: "/lpw/venv" }}
      />
    </div>
  );
};

export default OllamaSetup;