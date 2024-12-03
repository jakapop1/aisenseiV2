import React from 'react';
import CTILayout from '../../../components/layout/CTILayout';
import NavButtons from '../../../components/shared/NavButtons';

const CTIExercise = () => {
  return(
    <CTILayout>
      <h1>Exercise: Create Your Own LLM With RAG</h1>

      <p>
        Pre-requisite steps: Open WebUI Installation, Open WebUI Setup
      </p>
      
      <section>
        <h2>Step 1: Install Check-In</h2>
        <p>
          Make sure you have followed the steps outlined in our Installation and Setup Guides. For this exercise you will need 
          Open WebUI installed, running, and connected to Ollama. Ollama should have models downloaded and visible in your Open WebUI 
          Workspace. Once you have completed these steps you can continue with the tutorial.
        </p>
        <h2>Step 2: Test Base Model's Response</h2>
        <p>
          <li>Choose a model you would like to work with, in this example we will be using Llama3.2:1B which is available through Ollama. 
          Feel free to try this exercise with a different model.</li>
          <li>Determine a prompt to ask the model throughout this exercise. In this exercise we will be using the json files provided in the 
          <a class="highlight-text" href="https://github.com/mitre/cti"> MITRE ATT&CK</a> CTI repository on github. So we should ask a question that is relevant to this 
          information.<br /><br/>The prompt used in the example is:<br /> &quot;What are the defensive and mitigative strategies Mitre Att&ck recommends 
          when dealing with a DNS attack? Give me a list of TTPs, assume I am an entry level analyst that has just discovered an anomaly in 
          the network logs. I do not know what my next steps should be and need all the relevant information to help me deal with the DNS 
          attack.&quot;</li>
          <li>Now ask your prompt to the model and let's see how it responds.</li>
        </p>
        <image />

        <h2>Step 3: Connect The Model To The Knowledge Base</h2>
        <li>Connect your model to your personal knowledge base. In this exercise we will be using the json files provided in the 
            <a href="https://github.com/mitre/cti">MITRE ATT&CK</a> CTI repository on github. If you need to create 
              your own knowledge base you can see our tutorial here: <a class="highlight-text" href="/cti/RAG">Create Your CTI Knowledge Collection</a></li>
        <li>Now ask the exact same prompt again but this time include the collection in the context by typing the &quot;#&quot; symbol. 
          It should bring up a list of your collections so you can choose the one you want to use. We will be using our MITRE ATT&CK collection 
          for the example.
        </li>
        <li>Notice how the knowledge base completely transforms the response, the model now can answer questions with responses directly 
          from the MITRE ATT&CK documentation.
        </li>
        <iframe src="https://drive.google.com/file/d/1T8D1C_BHjKK3KOB0siImJWkoK9x2V94k/preview" title="no-rag-example" width="640" height="480" allow="autoplay"></iframe>
        <br />
        <iframe src="https://drive.google.com/file/d/1ByY_MXmPgWLZBdZ3AvEy9pzRW8BPSlcK/preview" title="with-rag-example" width="640" height="480" allow="autoplay"></iframe>

        <p>
          It is clear to see that RAG improves the performance of LLMs so they can answer niche questions if provided the proper information.
          Open WebUI makes RAG easy with its file manager UI, creating it is as easy as using Google Drive. One key drawback of this easy to use 
          implementation is the manual process of pulling and updating documents. With a large enough knowledge base we can see how this poses a 
          big issue. This leads us to the next section of our exercise.
        </p>
      </section>

      <h1>Implementing RAG with Pipelines</h1>
      <p>
        Pipelines enable us to call functions and implement RAG in a different and more dynamic way. We can use Pipelines to tell the model 
        to fetch and parse data from the web. This allows the model to pull data at the time it receives a user request, ensuring all information 
        is up to date.
      </p>

      <section>
        <h2>Step 1: Install and Configure Pipelines</h2>
        <p>
          You can follow the Open WebUI Documentation and its guide to set up Pipelines.
        </p>
        <h2>Step 2: Creating the RAG pipeline</h2>
        <h3>Step 3: Test the pipeline</h3>
      </section>

      <h1>Complete RAG Implementation</h1>
      <section>
        <p>
          If we combine the static knowledge base with RAG pipelines we can create an easy to use custom model with cybersecurity expertise. 
          We can use pipelines to update our knowledge base so our collection of documents stays up to date, or we can use pipelines like APIs 
          to pull data from the web on demand. 
        </p>
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

export default CTIExercise;