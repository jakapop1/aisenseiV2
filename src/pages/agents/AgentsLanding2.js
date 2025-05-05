// src/pages/agents/AgentsLanding2.js
import React from 'react';
import AgentsLayout from '../../components/layout/AgentsLayout';
import NavButtons from '../../components/shared/NavButtons';

const AgentsLanding2 = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>What is cyber-security-llm-agents (CSLA)?</h1>
        <section>
          <h2>cyber-security-llm-agents</h2>
          <p>
            cyber-security-llm-agents (or CSLA, for brevity—not to be confused with the unrelated CSLA .NET framework)
            is an open-source toolkit that helps analysts automate and streamline repetitive or data-heavy cybersecurity
            tasks using autonomous AI agents. It does this by letting users design and run AI-powered workflows, each
            packaged as a simple "action" that can be executed from the command line. Once run, an action triggers one
            or more agents—capable of reasoning, executing commands, and interpreting results—to complete a task and
            return the output. Users can create new actions using natural language prompts, and the framework also
            includes nine ready-to-run actions out of the box that cover everything from summarizing threat reports to
            building adversary profiles from public data.
          </p>
          <p>
            CSLA supports running large language models locally with Ollama, giving users full control over data and
            execution. It also integrates with simulation environments like MITRE Caldera, and uses structured datasets
            like EDR telemetry reports and public threat intelligence sources to power meaningful, security-relevant
            automation. The system is built on top of LangChain and CrewAI, making it easy to configure role-specific
            agents and orchestrate them into complete, multi-step workflows.
          </p>

          <h2>Why use cyber-security-llm-agents?</h2>
          <p>
            cyber-security-llm-agents is designed to be powerful, modular, and beginner-friendly. It supports both local
            and remote deployment options, and allows analysts to explore the use of LLMs in cybersecurity without
            needing deep machine learning knowledge. Analysts can create custom workflows, adapt existing ones, or run
            out-of-the-box actions for common use cases like:
          </p>
          <ul>
            <li>Collecting telemetry and simulating endpoint behavior using Caldera</li>
            <li>Summarizing MITRE techniques from live threat intel reports</li>
            <li>Mapping TTPs to adversary profiles</li>
            <li>Detecting security tools and EDR coverage gaps</li>
          </ul>

          <p>
            The real strength of CSLA lies in its flexibility. You can define your own agents, assign tools, write
            prompts, and connect tasks together however you need—whether you're building a red team lab, automating a
            triage pipeline, or testing a detection hypothesis. The platform is built to scale with your skills and
            needs, offering a repeatable and customizable way to explore how AI can support cybersecurity operations.
          </p>

        </section>


        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="mb-2"><strong>CAUTION:</strong> cyber-security-llm-agents uses LLMs to generate code and
            commands that interact directly with your system. Running LLM-generated source code and commands poses a
            security risk to your host environment! Be careful and only run this in a virtual or test environment, such
            as <a target='_blank' rel="noreferrer"
                  href="https://www.virtualbox.org/"
                  className="text-blue-600 hover:underline">VirtualBox</a>.
          </p>
        </div>


        <NavButtons
            previous={{
              text: "Module Introduction",
              link: "/agents/introduction"
            }}
            next={{
              text: "Video Walkthrough",
              link: "/agents/introduction3"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default AgentsLanding2;