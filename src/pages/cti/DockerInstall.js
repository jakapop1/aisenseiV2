import React from 'react';
import CTILayout from '../../components/layout/CTILayout';

const DockerSetup = () => {
  return (
    <CTILayout>
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
    </CTILayout>
  );
};

export default DockerSetup;