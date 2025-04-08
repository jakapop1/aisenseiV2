// src/pages/agents/AgentsLanding2.js
import React from 'react';
import AgentsLayout from '../../components/layout/AgentsLayout';
import NavButtons from '../../components/shared/NavButtons';

const AgentsLanding2 = () => {
  return (
    <AgentsLayout>
      <div classname="lpw-content">
        <h1>What is cyber-security-llm-agents (LLM Agents)?</h1>
        <section>
          <h2>cyber-security-llm-agents</h2>
          <p>
            cyber-security-llm-agents (or LLM Agents, for brevity) is an open-source framework designed to help analysts automate and streamline repetitive or data-heavy cybersecurity tasks through the use of AI agents. It does this by compacting these workflows into easy to use “actions” that you can run from the command line. Once run, an action activates a group of AI agents—capable of reasoning, decision-making, and tool usage—to complete the task and return the result. Users can quickly and easily create new actions using natural language, but the framework also comes with ten ready-to-go actions that you can use as soon as you download it.
          </p>
          <p>
            It supports local language models through tools like Ollama, and connects to real-world data sources such as VirusTotal, Shodan, and Elastic SIEM. The system is built on top of LangChain and CrewAI, making it easy to configure intelligent, role-specific agents that can collaborate to complete complex workflows.          </p>

          <h2>Why use cyber-security-llm-agents?</h2>
          <p>
            cyber-security-llm-agents is an extremely easy to use tool that offers multiple deployment methods. It is customizable and
            allows users
            to implement RAG extremely easily. It does this using its knowledge tools that provide the LLM "persistent
            information" the
            user can reference whenever they need. The knowledge tool provided by Open Web UI allows users to upload and
            manage a knowledge
            base of documents. The AI can then access and reference the documents when generating responses. This
            enhances its accuracy by
            pulling relevant information from external sources, making it a practical implementation of RAG.
          </p>

          <p>
            cyber-security-llm-agents also offers many tools that allow you to customize and enhance your LLMs abilities. Open WebUI
            offers the ability
            to create your own functions and tools to use with your AI. Open WebUI's Pipelines also extend the
            capabilities of functions
            and can help reduce the load on your Open WebUI instance by executing on a sepearate server. The tool is
            both easy to use and
            accessible for beginner users without limiting what advanced users can do.
          </p>

        </section>
        <NavButtons
            previous={{
              text: "Module Introduction",
              link: "/agents/introduction"
            }}
            next={{
              text: "Installing Python",
              link: "/agents/python"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default AgentsLanding2;