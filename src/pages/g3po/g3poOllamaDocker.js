import React from 'react';
import G3POLayout from '../../components/layout/G3POLayout';
import CopyCodeButton from '../../components/shared/CopyCodeButton';
import NavButtons from '../../components/shared/NavButtons';

const G3PODockerOllama = () => {
  return (
    <G3POLayout>
      <h1>Quick-Start Guide to Installing Ollama</h1>

<p>
  Pre-requisite step: Install Docker Desktop
</p>

<section>
  <h2>Install Ollama</h2>
  <p>
    We want to install Ollama and run it in a docker container. Ollama will be used to install and manage the various LLM models. So we need Ollama running in a docker container for G3PO to operate successfully. 
  </p>



  <CopyCodeButton 
          code={`docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:latest`}
  />

<img src="/images/1.png" alt="Instruction 1" width="700" height="auto" />

</section>

<section>
  <h2>Official Ollama + Docker Documentation</h2>
  <p>
    For additional information, configuration options, or troubleshooting, refer to the official Ollama Docker setup guide here:
  </p>

  <a 
    href="https://github.com/ollama/ollama/blob/main/docs/docker.md" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <pre><code>https://github.com/ollama/ollama/blob/main/docs/docker.md</code></pre>
  </a>

  <p>

  </p>
  <p>
    This reference covers topics such as:
  </p>
  <ul>
    <li>Customizing ports and volumes</li>
    <li>Environment variables</li>
    <li>Using Ollama outside of Docker</li>
  </ul>
</section>


      <NavButtons 
          previous = {{
            link: "/g3po/docker",
            text: "Docker Installation"
          }}
          next={{
            link: "/g3po/docker/ollama/ghidra",
            text: "Ghidra Installation"
          }}
        />
    </G3POLayout>
  );
};

export default G3PODockerOllama;