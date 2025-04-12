// src/pages/agents/AgentsLanding.js
import React from 'react';
import AgentsLayout from '../../components/layout/AgentsLayout';
import NavButtons from '../../components/shared/NavButtons';

const AgentsLanding = () => {
  return (
    <AgentsLayout>
      <div classname="lpw-content">
        <h1>Guide to using cyber-security-llm-agents (CSLA)</h1>
        <section>
          <h2>Introduction</h2>
          <p>
            In this module, we will explore how autonomous artificial intelligence "agents" can be used to enhance and
            automate a wide range of
            cybersecurity tasks. Many activities in cyber defense—such as threat triage, log analysis, and intelligence
            gathering—require significant time and expertise to perform manually. These tasks often involve navigating
            large datasets, consulting external tools, and drawing meaningful conclusions under pressure. By leveraging
            large language models (LLM) and AI agents in these workflows, we can reduce the manual burden, improve
            consistency,
            and accelerate decision-making. This approach enables analysts to offload routine or data-heavy tasks while
            focusing their efforts on interpreting results and taking action.

          </p>
          <h2>What is "Agentic AI"?</h2>
          <p>
            Agentic AI refers to the use of AI agents—autonomous software entities that can make decisions, take
            actions, and interact with tools or data sources—to complete specific tasks in real time. Each agent is
            designed with a role, a goal, and often access to one or more tools it can use to achieve that goal.
            For instance, in a cybersecurity application, an agent might be responsible for extracting indicators of
            compromise (IOCs) from a threat report, querying an IP address against external databases, or analyzing a
            stream of log data. The agent processes information, reasons through the task, and either completes it
            or passes results to another agent in the system.
          </p>
          <p>
            When multiple agents are connected and work together toward a shared objective, we refer to this as agentic
            AI. These agents can communicate, coordinate, and divide work—mirroring how human teams operate. This makes
            it possible to automate complex, multi-step tasks such as incident triage, threat hunting, or report
            generation in a modular and scalable way. By structuring AI in this way, cybersecurity professionals can
            build workflows that are more adaptive, efficient, and capable of handling the growing scale and complexity
            of modern threats.
          </p>


          <h2>Benefits for Cyber Analysts</h2>
          <ul>
            <li>
              <strong>Automation:</strong> Agents handle repetitive or complex tasks, freeing analysts to focus on
              decision-making
            </li>
            <li>
              <strong>Modularity:</strong> Workflows can be easily extended or adapted for different tools and use cases
            </li>
            <li>
              <strong>Tool Integration:</strong> Built-in support for common threat intel and logging platforms (e.g., Shodan, VirusTotal, etc.)
            </li>
            <li>
              <strong>Privacy:</strong> Can be run entirely locally to ensure data privacy and security.
            </li>
            <li>
              <strong>Accessibility:</strong> Analysts can use natural language instructions to guide agents, lowering
              the learning curve
            </li>
          </ul>
        </section>
        <NavButtons
            next={{
              link: "/agents/introduction2",
              text: "What is cyber-security-llm-agents?"
            }}
            singleButtonPosition="right"
        />
      </div>
    </AgentsLayout>
  );
};

export default AgentsLanding;