import React from 'react';
import NavButtons from '../../components/shared/NavButtons';
import G3POLayout from '../../components/layout/G3POLayout';

const G3POScriptIntro = () => (
  <G3POLayout>
    <h1>G3PO Script: AI-Assisted Reverse Engineering</h1>

    <section>
      <h2>What is G3PO?</h2>
      <p>
        G3PO is a Ghidra extension developed by <strong>Tenable</strong> that harnesses large language models to streamline reverse engineering. It decompiles functions, sends code to an LLM, and returns clear, natural language explanations along with suggestions for renaming and inline comments.
      </p>
      <p>
        <a
          href="https://github.com/tenable/ghidra_tools/blob/main/g3po/g3po.py"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the official G3PO script on GitHub.
        </a>
      </p>
    </section>

    <section>
      <h2>Why Use G3PO?</h2>
      <ul>
        <li>Automated reverse engineering insights within Ghidra</li>
        <li>AI-driven explanations of low-level code</li>
        <li>Contextual inline commentary</li>
        <li>Improved naming for functions</li>
      </ul>
    </section>

    <section>
      <h2>Enhanced Features</h2>
      <p>
        This version replaces cloud-based APIs with local LLM support via <strong>Ollama</strong>, ensuring offline functionality and enhanced privacy.
      </p>
      <h3>Key Modifications</h3>
      <ul>
        <li>
          Integrates local API calls via <code>http://localhost:11434/api/generate</code>
        </li>
        <li>Removes ASCII speech bubbles for a cleaner interface</li>
        <li>
          Offers optional logging of AI output to <code>G3PO_interaction_log.txt</code> to user's desktop
        </li>
        <li>
          Includes the feature to rename functions.
        </li>
        <li>
          Optimized for local LLMs such as <code>llama3</code> running in Docker with Ollama.
        </li>
      </ul>

    </section>

    <section>
      <h2>Download the Script</h2>
      <p>
        Download the custom G3PO script optimized for Ollama and save it in your Ghidra <code>MyScripts</code> folder.
      </p>
      <a
        href="/downloads/g3po.py"
        download
        style={{
          display: 'inline-block',
          padding: '10px 15px',
          backgroundColor: '#282c34',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          marginTop: '10px'
        }}
      >
        Download g3po.py
      </a>
      <p style={{ marginTop: '10px' }}>
        Or <a
          href="https://github.com/jakapop1/aisenseiV2/blob/main/public/downloads/g3po.py"
          target="_blank"
          rel="noopener noreferrer"
        >
          view the script on GitHub
        </a>.
      </p>
    </section>

    <section>
      <h2>Instructions</h2>
      <ol>
        <li>
          Start Ollama and load a compatible LLM <code>ollama run llama3 (recommended model)</code>
        </li>

        <li>
          Launch Ghidra and open your project.
        </li>

        <img
          src="/images/g3po/beforeAI.png"
          alt="Project Page"
          width="700"
        />

        <p>

        </p>
        <li>
          Navigate to Window &gt; Script Manager
        </li>

        <img
          src="/images/g3po/scriptmanager.png"
          alt="Finding Script Manager"
          width="700"
        />

        <p>

        </p>

        <li>
          Create a new script by locating and clicking on the icon circled in the image below.
        </li>

        <img
          src="/images/g3po/creatingScript.png"
          alt="Creating a Script"
          width="700"
        />

        <p> </p>

        <li>
          Select Jython
        </li>

        <img
          src="/images/g3po/scriptType.png"
          alt="Select Type"
          width="300"
        />
        <p> </p>

        <li>
          Select a directory and enter your script name ending in .py
        </li>

        <img
          src="/images/g3po/creatingFile.png"
          alt="Name Script"
          width="300"
        />

        <li>
          Locate the created file and right click to edit the script with your preferred editor. Copy and paste the provided script to your editor and save.
        </li>

        <img
          src="/images/g3po/importingScript.png"
          alt="Open Editor"
          width="700"
        />

        <p> </p>

        <li>
          Select a function to analyze and run the script using <strong>Ctrl+G</strong> or via the Script Manager.
        </li>

        <img
          src="/images/g3po/runScript.png"
          alt="Run Script"
          width="300"
        />

        <li>
          If everything is working properly, the output should be similar to the image provided below.
        </li>

        <img
          src="/images/g3po/result.png"
          alt="Result"
          width="500"
        />

        <p> </p>
        <li>
          <strong>Note*</strong>AI queries are logged straight in the user's desktop as G3PO_interaction_log.
        </li>




      </ol>
    </section>



    <NavButtons
      previous={{
        link: "/g3po/docker/ollama/ghidra",
        text: "Ghidra Desktop Setup"
      }}
      next={{
        link: "/g3po/docker/ollama/ghidra/script/install",
        text: "Script Installation Guide"
      }}
    />
  </G3POLayout>
);

export default G3POScriptIntro;
