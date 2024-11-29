import React from 'react';
import CTILayout from '../../components/layout/CTILayout';
import CopyCodeButton from '../../components/shared/CopyCodeButton';
import NavButtons from '../../components/shared/NavButtons';

const CTISetup = () => {
  return (
    <CTILayout>
      <h1>Quick-Start Guide to Installing Open WebUI</h1>

      <p>
        Pre-requisite step: Install Docker Desktop
      </p>
      
      <section>
        <h2>Step 1: Install Ollama</h2>
        <p>
          We want to install Ollama and run it in a docker container. Open WebUI utilizes Ollama to install and download new models. So we need Ollama running in a docker container for OpenWebUI. 
        </p>

        <CopyCodeButton 
                code={`docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:latest`}
        />

        <p>
            If you do not have Ollama installed already this command should install it for you locally. If you already ran through the
            Ollama setup guide in the LPW section of our website, then this command should run it in a docker container. If you have 
            already installed models locally in Ollama then they should appear in Open WebUI.
        </p>

        <h2>Step 2: Install and Launch Open WebUI with new features</h2>
        <p>
            Next we will Install Open WebUI and Launch it in Docker. Run the following line of code in a terminal window.
        </p>

        <CopyCodeButton code={`docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main`} />

        <p>
            If you use Docker Desktop you should be able to open the localhost url and see Open WebUI running. Next step is to download a few models and test out the environment.
        </p>

      </section>

      <h1>Full Setup Guide for Open WebUI</h1>

      <section>
        <h2>Manual Setup</h2>
        <p>If you would like to see other installation methods such as those using Python, Kubernetes, or a Third Party Option you can visit 
            the Open WebUI Documentation and see the installation steps.
        </p>
        <a href="https://docs.openwebui.com/getting-started/quick-start/"><pre><code>https://docs.openwebui.com/getting-started/quick-start/</code></pre></a>
      </section>
      <NavButtons 
          previous = {{
            link: "/cti/docker",
            text: "Install Docker"
          }}
          next={{
            link: "/cti/settings",
            text: "Configuring Open WebUI"
          }}
        />
    </CTILayout>
  );
};

export default CTISetup;