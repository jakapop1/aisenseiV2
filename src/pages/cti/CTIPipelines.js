import React from 'react';
import CTILayout from '../../components/layout/CTILayout';
import NavButtons from '../../components/shared/NavButtons';

const CTIPipes = () => {
  return (
    <CTILayout>
      <h1>An Introduction to Open WebUI's Pipelines</h1>

      <p>
        Pre-requisite step: Install Open WebUI, Ollama
      </p>
      
      <section>
        <h2>What are Pipelines?</h2>
        <a href="https://docs.openwebui.com/pipelines/"><pre><code>https://docs.openwebui.com/pipelines/</code></pre></a>

      <h2>How to Create a Pipeline</h2>

      <p>
        Click on your user and go to the settings tab. Here you can configure the Open WebUI environment, settings in this screen 
        will affect all models. You can store user API keys for easy access and even archive all your chats.
      </p>

      <p>
        Currently there is not a lot of documentation on how to create a fully custom RAG pipeline but the following videos are: 
        <br />1. An in depth tutorial of how to code a basic retrieval pipeline.
        <br />2. A tutorial on how to create a RAG pipeline in python.
        <br />3. Another tutorial on implementing RAG in Ollama in python.
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uTDeuxyN-RM?si=3C5wb4wtA_P9EbHB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/msLovKSj8Q0?si=3CDpZaxIhm7ZKDmT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/>

      <h2>How to Use Pipelines</h2>

      <p>
          These settings are only available for admin level users and can be accessed by clicking on your user profile or through the 
          Open WebUI settings. Here you can manage user permissions, api connections, models, RAG settings, and more. 
      </p>

      <p>
        The video below shows how to set up your pipeline in settings and use it in the chat. It uses the 'Text-to-SQL Query' example 
        featured in the Open WebUI documentation. 
      </p>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/-qMvSi_BGOc?si=WfPaTy6d6hIjbzDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/y7frgUWrcT4?si=tkhYZOX4JQancie8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/>
      <h2>Limitations of Pipelines</h2>
      <p>
        
      </p>

      </section>

      <NavButtons 
          previous = {{
            link: "/cti/tools",
            text: "Tools and Functions"
          }}
          next={{
            link: "/cti/using",
            text: "Using Open WebUI"
          }}
        />
    </CTILayout>
  );
};

export default CTIPipes;