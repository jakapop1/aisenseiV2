import React from 'react';
import CTILayout from '../../components/layout/CTILayout';
import NavButtons from '../../components/shared/NavButtons';

const CTIWaysToInstall = () => {
  return (
    <CTILayout>
      <h1>Ways To Install Open WebUI</h1>
      
      <section>
        <h2>Open WebUI Is Available Through Docker, Python, Kubernetes, and The Third Party Software Pinokio</h2>
        <p>
          Open WebUI is available for download and installation on Mac, Windows, and Linux systems. Please pick the appropriate distribution 
          that works for your system. The reccommended setup method is Docker as it is easy to use and connect the containers for Open WebUI, 
          Ollama, and Pipelines. Our setup guide will focus the Docker install method but if you would like to use Python, Kubernetes, or Pinokio, 
          please visit the Open WebUI Documentation and follow their guide.
        </p>

        <p>Please see the documentation below </p>

        <a href="https://docs.openwebui.com/getting-started/quick-start/"><pre><code>https://docs.openwebui.com/getting-started/quick-start/</code></pre></a>
        
      </section>
      <NavButtons 
          previous = {{
            link: "/cti/openwebui",
            text: "What is Open WebUI?"
          }}
          next={{
            link: "/cti/docker",
            text: "Installing Docker"
          }}
        />
    </CTILayout>
  );
};

export default CTIWaysToInstall;