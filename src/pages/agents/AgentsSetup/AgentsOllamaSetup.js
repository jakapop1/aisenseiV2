import React from 'react';
import AgentsLayout from '../../../components/layout/AgentsLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const OllamaSetup = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>Configuring cyber-security-llm-agents for Local LLM Use</h1>

        <p>
          Once you've installed cyber-security-llm-agents (CSLA), you're ready to start using its built-in actions
          right away. CSLA is built on top of Autogen and LangChain, giving it the flexibility to work with a variety of
          large language model backends depending on your needs. However, if you'd like to run models locally—for better
          privacy, security, or offline use—you can configure CSLA to work with Ollama. Ollama is a lightweight tool
          that makes it easy to run open-source LLMs like Mistral or LLaMA2 on your own machine. Running models locally
          ensures that sensitive data (like logs, commands, or threat intel) stays on your system and isn't sent to
          external APIs. For a more detailed overview of Ollama, see <a href="http://localhost:3000/lpw/ollama"
                                                                       className="text-blue-600 hover:underline">here</a>.
        </p>
        <p>
          This page walks you through installing Ollama, running a local model, and configuring CSLA to use it—so you
          can keep your workflow fast, private, and fully under your control.
        </p>

        <section>
          <h2>Installing Ollama</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              Download the <a href="https://ollama.com/"
                              className="text-blue-600 hover:underline">Ollama installer</a>.
            </li>
            <li>Run the installer and follow the instructions.
              <img src="/images/agents/ollamainstall.png" alt="Example Output" width="500"/>
            </li>
            <li>
              Once it's done, it will run automatically and you should be able to see it in your system tray, under
              hidden icons.
            </li>
            <li>
              Open a new terminal window and run:
              <CopyCodeButton code="ollama pull dolphin-mistral:latest"/>
              <p>This will download a starting LLM model for Ollama to use. If you decide to use a different model, simply replace "dolphin-mistral" in subsequent steps with your chosen model.</p>
            </li>
          </ol>

          <h2>Configuring CSLA to Use Ollama</h2>
          <p>Adjusting CSLA to use Ollama is actually fairly simple.</p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              Navigate to your cyber-security-llm-agents directory, and open the file called ".env".
            </li>
            <li>
              Replace the section that says:
              <CopyCodeButton code='OPENAI_MODEL_NAME = "gpt-3.5-turbo-0125"
OPENAI_API_KEY = "<OPENAI API KEY>"'/>
              <p>With:</p>
              <CopyCodeButton code='OPENAI_API_KEY="ollama"
OPENAI_MODEL_NAME="dolphin-mistral"
OPENAI_API_BASE="http://localhost:11434/v1"'/>
            </li>
            <li>
              Next, navigate to cyber-security-llm-agents/utils and open the file called "shared_config.py".
            </li>
            <li>
              Replace the section near the top that says:
              <CopyCodeButton code='llm_config = {
"model": utils.constants.OPENAI_MODEL_NAME,
"api_key": utils.constants.OPENAI_API_KEY,
"cache_seed": None,
}'/>
              <p>With:</p>
              <CopyCodeButton code='llm_config = {
"model": "dolphin-mistral",
"base_url": "http://localhost:11434/v1",
"api_key": "ollama",
"cache_seed": None,
}'/>
            </li>
            <li>
              These two changes will redirect CSLA requests to your local Ollama API instead of OpenAI's API. Run
              HELLO_AGENTS to confirm functionality:
              <CopyCodeButton code="python run_agents.py HELLO_AGENTS"/>
              <p>CSLA should now be a completely local process, however, agents may behave differently depending on which model is used.</p>
            </li>
          </ol>
        </section>

        <NavButtons
            previous={{
              text: "Installing CSLA",
              link: "/agents/setup"
            }}
            next={{
              text: "Using CSLA",
              link: "/agents/basic"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default OllamaSetup;
