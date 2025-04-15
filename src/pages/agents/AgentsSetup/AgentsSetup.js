import React from 'react';
import AgentsLayout from '../../../components/layout/AgentsLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const AgentsOllamaSetup = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>Installing cyber-security-llm-agents</h1>

        <p>Now that all the prerequisites are taken care of, we can move on to installing cyber-security-llm-agents itself.</p>

        <section>
          <h2>Installation Steps</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              Visit the <a href="https://github.com/NVISOsecurity/cyber-security-llm-agents"
                           className="text-blue-600 hover:underline">cyber-security-llm-agents GitHub repository</a>.
            </li>
            <li>Choose the "Download ZIP" option (under the green "Code" button) to download the repository as a zip
              file, and unzip it.
              <img src="/images/agents/github.png" alt="Example Output" width="350"/>
            </li>
            <li>
              Navigate to the directory where you unzipped the repository and run the following command:
              <CopyCodeButton code="pip install -r requirements.txt"/>
              <p>This will download all required modules necessary to run CSLA.</p>
            </li>
            <li>
              Next, copy the template configuration file to a new file named .env using this command:
              <CopyCodeButton code="cp .env_template .env"/>
              <p>This will allow you to customize the configuration settings for your installation.</p>
            </li>
            <li>
              Open the newly created .env file and fill in your LLM API information (e.g., OpenAI API key) and other
              relevant fields:
              <CopyCodeButton code='CALDERA_SERVER = "http://<caldera hostname>:8888"
CALDERA_API_KEY = "<CALDERA API KEY>"'/>
              <CopyCodeButton code='OPENAI_MODEL_NAME = "gpt-3.5-turbo-0125"
OPENAI_API_KEY = "<OPENAI API KEY>"'/>
            </li>
            <li>
              Verify the installation by running the following command in the terminal:
              <CopyCodeButton code="python run_agents.py HELLO_AGENTS"/>
              <p>If it's working, the output should show the agents attempt at humor, something like:</p>
              <img src="/images/agents/defaultoutput.png" alt="Example Output" width="750"/>
            </li>
          </ol>
        </section>

        <NavButtons
            previous={{
              text: "Installing Caldera",
              link: "/agents/caldera"
            }}
            next={{
              text: "Configuring CSLA",
              link: "/agents/ollama"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default AgentsOllamaSetup;
