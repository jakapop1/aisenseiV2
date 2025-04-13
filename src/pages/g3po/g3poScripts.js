import React from 'react';
import NavButtons from '../../components/shared/NavButtons';
import G3POLayout from '../../components/layout/G3POLayout';

const G3POScriptIntro = () => {
  return (
    <G3POLayout>
      <h1>G3PO Script: Reverse Engineering with AI Assistance</h1>

      <section>
        <h2>What is G3PO?</h2>
        <p>
          G3PO is a custom Ghidra script originally developed by <strong>Tenable</strong>. It integrates large language models (LLMs) like OpenAI's GPT or Anthropic’s Claude to analyze decompiled functions directly inside Ghidra.
        </p>
        <p>
          The script extracts decompiled or assembly code, sends it to an LLM, and receives a natural language explanation of what the function does. It can even rename variables and functions intelligently based on the analysis.
        </p>
        <img 
          src="/images/g3po/scriptFlow.png" 
          alt="How G3PO works inside Ghidra" 
          width="600" 
        />
      </section>

      <section>
        <h2>Why Use G3PO?</h2>
        <ul>
          <li> Automates reverse engineering analysis inside Ghidra</li>
          <li> Uses AI to interpret functions and suggest improvements</li>
          <li> Adds readable comments to aid understanding</li>
          <li> Optionally renames variables and functions</li>
        </ul>
      </section>

      <section>
        <h2>How This Version Is Different</h2>
        <p>
          While the original G3PO script uses cloud-based APIs like OpenAI and Claude, this version has been modified to support <strong>local LLMs via Ollama</strong>. This makes it ideal for offline or privacy-sensitive environments.
        </p>
        <h3>🔧 Key Modifications</h3>
        <ul>
          <li>
            Replaced the OpenAI/Anthropic API request logic with <code>http://localhost:11434/api/generate</code> calls for Ollama.
          </li>
          <li>
            Disabled G3PO’s default ASCII speech bubble for cleaner responses.
          </li>
          <li>
            Added logging to save AI output to <code>G3PO_interaction_log.txt</code> on your Desktop.
          </li>
          <li>
            Added improved handling for variable/function renaming (still experimental).
          </li>
        </ul>
        <p>
          These changes allow G3PO to run completely locally, assuming you have a model like <code>llama3</code> installed and running through Docker/Ollama.
        </p>
        <img 
          src="/images/g3po/localOllamaFlow.png" 
          alt="Local Ollama setup with G3PO" 
          width="600" 
        />
      </section>

      <section>
        <h2>How to Use It</h2>
        <ol>
          <li>Start your local Ollama server with a compatible model (e.g. <code>ollama run llama3</code>).</li>
          <li>Launch Ghidra and load your project.</li>
          <li>Open the Script Manager (<code>Window &gt; Script Manager</code>).</li>
          <li>Place the modified <code>g3po.py</code> in the <code>MyScripts</code> folder.</li>
          <li>Run the script on any function in Ghidra (you can press <strong>Ctrl+G</strong> by default).</li>
        </ol>
      </section>

      <section>
        <h2>View the Source</h2>
        <p>
          The modified version of the G3PO script can be found here:
        </p>
        <a 
          href="https://github.com/[your-repo-link]/g3po.py" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <pre><code>https://github.com/[your-repo-link]/g3po.py</code></pre>
        </a>
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
};

export default G3POScriptIntro;
