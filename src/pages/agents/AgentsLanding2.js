// src/pages/agents/AgentsLanding2.js
import React from 'react';
import AgentsLayout from '../../components/layout/AgentsLayout';
import NavButtons from '../../components/shared/NavButtons';

const AgentsLanding2 = () => {
  return (
    <AgentsLayout>
      <div classname="lpw-content">
        <h1>What is cyber-security-llm-agents (CSLA)?</h1>
        <section>
          <h2>cyber-security-llm-agents</h2>
          <p>
            cyber-security-llm-agents (or CSLA, for brevity, not to be confused with the unrelated CSLA .NET) is an
            open-source
            framework designed to help analysts
            automate and streamline repetitive or data-heavy cybersecurity tasks through the use of AI agents. It does
            this by allowing users to design and deploy AI-powered workflows that can be customized for a variety of
            cybersecurity tasks, compacting them into easy to use “actions” that you can run from the command line. Once
            run, an action activates a group of AI agents—capable of reasoning, decision-making, and tool usage—to
            complete the task and return the result. Users can quickly and easily create new actions using natural
            language, but the framework also comes with ten ready-to-go actions that you can use as soon as you download
            it.
          </p>
          <p>
            CSLA supports various large language models locally through tools like Ollama, but can also connect to
            real-world data sources such as
            VirusTotal, Shodan, and Elastic SIEM. The system is built on top of LangChain and CrewAI, making it easy to
            configure intelligent, role-specific agents that can collaborate to complete complex workflows.
          </p>

          <h2>Why use cyber-security-llm-agents?</h2>
          <p>
            cyber-security-llm-agents is a powerful, flexible, and most importantly, easy-to-use toolset that offers
            multiple deployment methods, including local execution with tools like Ollama, allowing analysts to keep
            data on-premises while still taking advantage of powerful language models. It’s also integrated with many widely
            used services such as VirusTotal, Shodan, and Elastic, providing direct access to threat intelligence and
            log data. But most importantly, it’s designed to be accessible for beginners and simple to run, yet is
            still extensible for advanced users who want full control over their workflows.
          </p>

          <p>
            The real strength of CSLA lies in its modularity. Analysts can define their own agents,
            assign tools, and customize prompts to suit different environments, threat profiles, or operational needs.
            Whether building a red team simulation, setting up automated triage, or experimenting with AI-driven threat
            hunting, the platform offers a streamlined, repeatable way to apply LLMs in cybersecurity.
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