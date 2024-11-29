import React from 'react';
import CTILayout from '../../components/layout/CTILayout';
import CopyCodeButton from '../../components/shared/CopyCodeButton';
import NavButtons from '../../components/shared/NavButtons';

const CTITools = () => {
  return (
    <CTILayout>
      <h1>Tools and Functions</h1>

      <p>
        Pre-requisite step: Install Open WebUI, Ollama, Configure Your Environment
      </p>
      
      <section>

        <h2>What are Tools and Functions?</h2>
        <a href="https://docs.openwebui.com/features/plugin/"><pre><code>What are Tools and Functions?</code></pre></a>
        <a href="https://docs.openwebui.com/features/plugin/tools/#what-are-tools"><pre><code>https://docs.openwebui.com/features/plugin/tools/#what-are-tools</code></pre></a>
        <a href="https://docs.openwebui.com/features/plugin/functions/#what-are-functions"><pre><code>https://docs.openwebui.com/features/plugin/functions/#what-are-functions</code></pre></a>
        <p>
          Tools and Functions serve as a way to enhance your LLM's capabilities. Expand on ways that users can interact with the LLM 
          to pull and view data, connect the LLMs context to outside documents and resources, and much more.
        </p>
      <h2>How to Create Tools and Functions?</h2>

      <p>
        Go to Workspace and click on either the Tools or Functions tab depending on what you want to create. In both sections there 
        are options to import a Tool/Function and create a tool (the '+' button). If you choose to create a Tool/Function you can 
        name your Tool/Function and write the code for the Tool/Function in python below. There are Open WebUI specific variables/classes 
        that you may need to use in your Tool/Function, you can find these in the Open WebUI documentation.
      </p>

      <h2>How to Use Tools and Functions</h2>

      <p>
          To incorporate the tools in your models you will need to edit the models settings. Here you can select which Tools/Functions 
          your model has access to. Tools are 
      </p>

      <h2>Limitations to Tools and Functions</h2>
      <p>
        Tools and Functions are not capable of downloading new packages in Open WebUI. This means you can only import packages that are 
        included in Open WebUI.
      </p>
      <p>
        This problem is resolved by utilizing Open WebUI's Pipelines.
      </p>

      </section>
      <NavButtons 
          previous = {{
            link: "/cti/rag",
            text: "Create Your CTI Knowledge Collection"
          }}
          next={{
            link: "/cti/pipelines",
            text: "Introduction to Pipelines"
          }}
        />
    </CTILayout>
  );
};

export default CTITools;