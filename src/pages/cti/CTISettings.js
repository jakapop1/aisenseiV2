import React from 'react';
import CTILayout from '../../components/layout/CTILayout';
import NavButtons from '../../components/shared/NavButtons';

const CTISettings = () => {
  return (
    <CTILayout>
      <h1>Setting Up Your Environment</h1>

      <p>
        Pre-requisite step: Install Open WebUI, Ollama
      </p>
      
      <section>
      <h2>Open WebUI Settings</h2>

      <p>
        Click on your user and go to the settings tab. Here you can configure the Open WebUI environment, settings in this screen 
        will affect all models. You can store user API keys for easy access and even archive all your chats.
      </p>

      <h2>Admin Settings</h2>

      <p>
          These settings are only available for admin level users and can be accessed by clicking on your user profile or through the 
          Open WebUI settings. Here you can manage user permissions, api connections, models, RAG settings, and more. In the documents tab 
          you can find the RAG settings. You can change the embeddings model engine you would like your model to use, by default it uses 
          sentence transformers. 
        </p>
        <p>
            In these settings you can also change the 'Top K' value, this value determines the number of documents your 
            model will use to generate its response. More documents most likely means a longer response time, but also a more complete response. 
            More documents to analyze and consider means the LLM will have a greater knowledge of the topic when answering your prompt. In the 
            RAG template settings, you can input a custom prompt to influence how your LLM generates responses. The custom prompt should detail 
            the steps that the model will take when provided external context. It should also include the format of the prompt that will trigger 
            this behavior. You can look at the link below for further details on this process.
        </p>

        <a href="https://medium.com/@kelvincampelo/how-ive-optimized-document-interactions-with-open-webui-and-rag-a-comprehensive-guide-65d1221729eb"><pre><code>Optimizing Document Interactions With Open WebUI And RAG</code></pre></a>
      

        <h2>Download a Model</h2>
        <p>
          In Admin Settings, go to the models tab. Under section heading "Pull a model from Ollama.com" enter the model tag and click the 
          download button. If you don't know the model tag you can click on the link below the text input and view the models available. 
          We also tested installing a model using Ollama commands and that worked as well.
        </p>

        <h2>Model Settings</h2>
        <p>
            If you click the pencil icon next to one of your models, you will open the settings panel for that model. Here you can 
            connect a knowledge collection, define system prompts, and enable custom tools and functions.
        </p>

        <image />

      </section>
      <NavButtons 
          previous = {{
            link: "/cti/setup",
            text: "Installing Open WebUI With Docker"
          }}
          next={{
            link: "/cti/rag",
            text: "Create Your CTI Knowledge Collection"
          }}
        />
    </CTILayout>
  );
};

export default CTISettings;