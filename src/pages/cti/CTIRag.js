import React from 'react';
import CTILayout from '../../components/layout/CTILayout';
import NavButtons from '../../components/shared/NavButtons';

const CTIRag = () => {
  return (
    <CTILayout>
      <h1>How To Create And Use Your Custom Knowledge</h1>

      <p>
        Pre-requisite step: Install Open WebUI, Ollama, Install A Model With Ollama
      </p>
      
      <section>
        <h2>Step 1: Open The Sidebar Menu</h2>
        <p>
            Click the sidebar menu icon as shown in the image below. This sidebar will be where our previous chats are logged 
            and where we can access our workspace. 
        </p>
        <img 
                src="/images/step1_createrag.png" 
                alt="Step 1: Create Rag" 
                className="rounded-lg shadow-md mb-4"
              />

        <h2>Step 2: Go To Workspace</h2>

        <p>
            The Workspace is where we can access the settings for the Models, Knowledge, Tools, and Functions. 
            In the models panel we can change the settings of the models we have already installed. There are also options 
            to import new models through the Open WebUI website but installing models through Ollama is safer. The Knowledge 
            section is where we will be focused on in this section as it contains the controls to create and manage the files 
            in one or multiple knowledge bases.
        </p>

        <img 
                src="/images/step2_createrag.png" 
                alt="Step 2: Create Rag" 
                className="rounded-lg shadow-md mb-4"
              />

        <h2>Step 3: Go To Knowledge</h2>

        <p>
            Click on the Knowledge tab and start curating your custom Knowledge.
        </p>
        <img 
                src="/images/step3_createrag.png" 
                alt="Step 3: Create Rag" 
                className="rounded-lg shadow-md mb-4"
              />

        <h2>Step 4: Add Knowledge</h2>

        <p>
            Create a new Knolwedge collection by clicking the "+" icon. Then give it a name so you can recognize the focus of the 
            documents it will store. You should also create a description for the collection to clearly define what is inside. 
            Both the name and the description are for your own use and do not the behavior of the collection or the LLM, so you can 
            add anything you please. Click create and you can start uploading documents you have saved locally.
        </p>
        <img 
                src="/images/step4_createrag.png" 
                alt="Step 4: Create Rag" 
                className="rounded-lg shadow-md mb-4"
              />

        <h2>Step 5: Upload Documents</h2>
        <img 
                src="/images/step5_createrag.png" 
                alt="Step 5: Create Rag" 
                className="rounded-lg shadow-md mb-4"
              />

      </section>

      <h1>Connect Your Knowledge To The LLM Model</h1>

      <section>
        <h2>Step 1: Go To Workspace</h2>
        <img 
                src="/images/step2_createrag.png" 
                alt="Step 2: Create Rag" 
                className="rounded-lg shadow-md mb-4"
              />

        <h2>Step 2: Go To Models</h2>


        <h2>Step 3: Go To Settings</h2>
        <img 
                src="/images/step2_connect.png" 
                alt="Step 2: connect Rag" 
                className="rounded-lg shadow-md mb-4"
              />


        <h2>Step 4: Add Knowledge</h2>
        <img 
                src="/images/step4_connect.png" 
                alt="Step 4: connect Rag" 
                className="rounded-lg shadow-md mb-4"
              />


        <h2>Step 5: Include # When Starting A New Chat</h2>
        <h3>Important: To use your knowledge base type '#' into the prompt input and you can choose the collection you want to use to augment the model</h3>
        <p>A pop-up menu will apear above the prompt input with a gallery of collections that you have created. You can select the collection 
            you want to use to augment the model and enter your prompt as usual. Once the LLM is fed the collection of documents, it will always 
            reference it when generating a response for that particular chat. If you create a new chat you will have to add the collection again for 
            the LLM to reference it. This allows you to augment different saved chat instances with different collections and see the difference in 
            the responses.
        </p>
        <img 
                src="/images/step5_connect.png" 
                alt="Step 5: Connect Rag" 
                className="rounded-lg shadow-md mb-4"
              />



      </section>
      <h1>Extend Your RAG With Pipelines</h1>

      <h2>What are Pipelines?</h2>
      <section>

      </section>
      <NavButtons 
          previous = {{
            link: "/cti/settings",
            text: "Configuring OpenWebUI"
          }}
          next={{
            link: "/cti/tools",
            text: "Tools and Functions in Open WebUI"
          }}
        />
    </CTILayout>
  );
};

export default CTIRag;