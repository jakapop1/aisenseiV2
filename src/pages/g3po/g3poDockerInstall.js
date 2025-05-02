import React from 'react';
import G3POLayout from '../../components/layout/G3POLayout';
import NavButtons from '../../components/shared/NavButtons';

const G3PODockerSetup = () => {
  return (
    <G3POLayout>
      <h1>Guide to Installing Docker</h1>

      <section>
        <h2>Reccommended Installation: Docker Desktop (Mac, Linux, Windows)</h2>
        <p>
          For Mac, Linux, and Windows systems an easy to use tool is Docker Desktop, it provides an easy to use interface for Docker.
        </p>

        <a href='https://docs.docker.com/desktop/'><pre><code>https://docs.docker.com/desktop/</code></pre></a>

        <p>
          Docker Desktop includes Docker Compose, which is a tool for defining and running multi-container applications. This is important for OpenWebUI since we will be running Ollama in separate container.
        </p>

        <h2>Installation: Docker Compose Standalone</h2>
        <p>
          The reccommended way to install Docker Compose is by installing Docker Desktop but if you just need Docker Compose you can install it following these directions.
        </p>

        <a href='https://docs.docker.com/compose/install/standalone/'><pre>
          <code>
            https://docs.docker.com/compose/install/standalone/
          </code>
        </pre></a>

      </section>

      <h2>G3PO Demo Walkthrough Video</h2>
      <iframe
        src="https://drive.google.com/file/d/1TG6G7_0Uee4mI_zA8lSgjSgrshpt-4sN/preview"
        title="G3PO Demo Walkthrough Video"
        width="100%"
        height="480"
        allow="autoplay"
        style={{ borderRadius: '8px', maxWidth: '960px', margin: '0 auto', display: 'block' }}
      ></iframe>

      <NavButtons
        previous={{
          link: "/g3po/g3po-introduction/g3po-example",
          text: "G3PO Example"
        }}
        next={{
          link: "/g3po/docker/ollama",
          text: "Ollama with Docker"
        }}
      />
    </G3POLayout>
  );
};

export default G3PODockerSetup;