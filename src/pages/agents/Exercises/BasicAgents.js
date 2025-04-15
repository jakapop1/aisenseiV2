import React from 'react';
import AgentsLayout from '../../../components/layout/AgentsLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const BasicAgents = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>Using cyber-security-llm-agents</h1>

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
            Cyber-security-llm-agents is a straightforward and flexible tool that compacts multi-step cybersecurity
            workflows into single, easy-to-run "actions." Each action represents a predefined task—such as summarizing
            threat reports, gathering simulation data from Caldera, or extracting MITRE techniques—that can be executed
            directly from the command line with minimal setup. The framework includes nine built-in actions, providing a
            strong foundation for automating common cybersecurity scenarios and red team simulations.
          </p>
          <img
              src="/images/agents/detect_edr.gif"
              alt="CSLA Demo Gif"
              className="mr-6 mb-4 w-[800px] rounded-lg shadow-md"
          />
          <p>To run an action, simply use the following syntax:</p>
          <CopyCodeButton code="python run_agents.py <ACTION NAME>"/>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Actions Available by Default</h2>
          <ol>
            <li>
              <h3 className="text-lg font-semibold mb-2">1. HELLO_AGENTS</h3>
              <CopyCodeButton code="python run_agents.py HELLO_AGENTS"/>
              <p className="mb-4">
                Sends a playful prompt to the agent asking for a cybersecurity-themed joke. This action is meant as a
                basic health check to verify that the LLM agent pipeline is functioning properly.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold mb-2">2. SUMMARIZE_RECENT_CISA_VULNS</h3>
              <CopyCodeButton code="python run_agents.py SUMMARIZE_RECENT_CISA_VULNS"/>
              <p className="mb-4">
                Downloads the CISA Known Exploited Vulnerabilities (KEV) JSON feed, extracts the 10 most recent entries
                using jq, and summarizes them. It highlights affected products, descriptions, and links—helping users
                stay informed on actively exploited vulnerabilities.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold mb-2">3. DETECT_AGENT_PRIVILEGES</h3>
              <CopyCodeButton code="python run_agents.py DETECT_AGENT_PRIVILEGES"/>
              <p className="mb-4">
                Uses PowerShell on the Caldera agent to check the user's privilege level (e.g., user, admin, system) and
                summarizes it in a structured table. Helps assess how much access an agent has during simulation.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold mb-2">4. COLLECT_CALDERA_INFO</h3>
              <CopyCodeButton code="python run_agents.py COLLECT_CALDERA_INFO"/>
              <p className="mb-4">
                Queries the active Caldera instance to get the current operation ID and the PAW
                (Platform/Architecture/Window) of the connected agent. Useful as setup info for other Caldera-based
                actions.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold mb-2">5. IDENTIFY_EDR_BYPASS_TECHNIQUES</h3>
              <CopyCodeButton code="python run_agents.py IDENTIFY_EDR_BYPASS_TECHNIQUES"/>
              <p className="mb-4">
                Downloads and parses a dataset of EDR telemetry gaps (from the EDR-Telemetry repo) to highlight areas
                where Elastic EDR may lack visibility. The output is a categorized list of telemetry gaps.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold mb-2">6. DETECT_EDR</h3>
              <CopyCodeButton code="python run_agents.py DETECT_EDR"/>
              <p className="mb-4">
                Downloads an EDR telemetry dataset README and lists all security products mentioned. Then, it queries
                the active Caldera agent for running Windows services and cross-references them to detect which EDRs
                might be active.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold mb-2">7. HELLO_CALDERA</h3>
              <CopyCodeButton code="python run_agents.py HELLO_CALDERA"/>
              <p className="mb-4">
                Retrieves Caldera operation and agent info, then sends a PowerShell command to display a message box
                (containing a cybersecurity joke) on the desktop of the active Caldera agent. Great for testing Caldera
                integration and agent visibility.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold mb-2">8. TTP_REPORT_TO_TECHNIQUES</h3>
              <CopyCodeButton code="python run_agents.py TTP_REPORT_TO_TECHNIQUES"/>
              <p className="mb-4">
                Downloads a specific Microsoft threat report and extracts all MITRE ATT&CK technique IDs mentioned in
                the article. The result is a clean list of relevant techniques observed in the campaign.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold mb-2">9. TTP_REPORT_TO_ADVERSARY_PROFILE</h3>
              <CopyCodeButton code="python run_agents.py TTP_REPORT_TO_ADVERSARY_PROFILE"/>
              <p className="mb-4">
                Downloads a DFIR report, extracts MITRE techniques, maps them to Caldera abilities, and creates a full
                adversary profile within Caldera—mirroring real-world threat behavior. This action demonstrates
                automated threat emulation from public intel.
              </p>
            </li>

          </ol>
        </section>


        <NavButtons
            previous={{
              text: "Configuring CSLA",
              link: "/agents/ollama"
            }}
            next={{
              text: "Creating New Actions",
              link: "/agents/create"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default BasicAgents;
