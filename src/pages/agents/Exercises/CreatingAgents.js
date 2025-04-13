import React from 'react';
import AgentsLayout from '../../../components/layout/AgentsLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CollapsibleCode from '../../../components/shared/CollapsibleCode';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const CreatingAgents = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>Creating Custom Actions in CSLA</h1>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="mb-2"><strong>CAUTION:</strong> cyber-security-llm-agents uses LLMs to generate code and
            commands that interact directly with your system. Running LLM-generated source code and commands poses a
            security risk to your host environment! Be careful and only run this in a virtual or test environment, such
            as <a target='_blank' rel="noreferrer"
                  href="https://www.virtualbox.org/"
                  className="text-blue-600 hover:underline">VirtualBox</a>.
          </p>
        </div>

        <section className="mb-8">
          <p className="mb-6">
          One of the most powerful features of cyber-security-llm-agents (CSLA) is its support for customizable,
            natural language–driven actions. While CSLA comes with several ready-made actions out of the box, you can
            easily define your own to automate specific cybersecurity tasks using AI agents. Actions in CSLA are defined
            in a simple Python dictionary structure, which maps an action name to a list of steps. Each step includes a
            message, agent assignment, optional summarization methods, and carryover values. This design allows you to
            create complex, multi-step tasks using natural language prompts.
          </p>

          <h2 className="text-xl font-semibold mb-4">Basic Structure of an Action</h2>
          <p>Here’s a minimal example of a custom action (sans spacing):</p>
          <CopyCodeButton code='"MY_CUSTOM_ACTION": [
{
"message": "Use PowerShell to list all processes running on the system.",
"summary_method": "last_msg",
"carryover": "Replace this placeholder with the list of processes.",
"agent": "caldera_agent"
},
{
"message": "Summarize the output and highlight any suspicious or uncommon processes.",
"summary_method": "reflection_with_llm",
"agent": "text_analyst_agent"
}
]'/>
          <p>Each step in the list is a task sent to an agent. You can chain together multiple agents—such as one that
            runs a command, and another that analyzes the result.
          </p>

          <h2>Key Fields</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>message:</strong> A prompt or instruction to the agent, written in natural language.</li>
            <li><strong>agent:</strong> The agent assigned to handle the message (e.g., text_analyst_agent,
              caldera_agent, internet_agent, cmd_exec_agent).
            </li>
            <li><strong>summary_method (optional):</strong> Controls how the result is processed (e.g., last_msg,
              reflection_with_llm).
            </li>
            <li><strong>carryover (optional):</strong> A placeholder string the agent replaces with actual content during execution.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Adding Your Action</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open <strong>agent_actions.py</strong> (~/cyber-security-llm-agents/actions/agent_actions.py).</li>
            <li>Add your new entry to the actions dictionary.</li>
            <li>Add the corresponding key to the scenarios dictionary at the bottom (if needed for CLI usage).</li>
            <li>Test running the new action using the CLI:</li>
          </ol>
          <CopyCodeButton code="python run_agents.py MY_CUSTOM_ACTION"/>

        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Tips for Designing Effective Actions</h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>Keep prompts clear and concise.</li>
            <li>Break complex tasks into smaller steps using multiple agents.</li>
            <li>Use carryover if you need to reference intermediate output between steps.</li>
            <li>Choose the appropriate agent for each task (e.g., command execution vs. language analysis).</li>
            <li>Make sure to only test actions in a safe, sandboxed environment.</li>
          </ul>

        </section>


        <NavButtons
            previous={{
              text: "Basic Actions",
              link: "/agents/basic"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default CreatingAgents;
