import React from 'react';
import AgentsLayout from '../../../components/layout/AgentsLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const CalderaSetup = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>Installing Caldera</h1>


        <section className="mb-12">

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">What is Caldera?</h2>
            <p className="mb-4">
              Caldera is an open-source red team platform developed by MITRE, used to simulate adversary behavior and
              evaluate detection capabilities. CSLA integrates with Caldera to perform actions such as executing
              simulated endpoint commands, retrieving operation data, and building adversary profiles. Many of CSLA’s
              included actions rely on a running Caldera instance, so setting it up is a key part of the environment.
              Fortunately, Caldera runs easily in a Docker container, and once installed, it can be accessed and
              controlled automatically by CSLA agents.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Installation Steps</h2>
              <p>You can find the official installation guide for Caldera <a target='_blank' rel="noreferrer"
                                                                 href="https://caldera.readthedocs.io/en/latest/Installing-Caldera.html"
                                                                 className="text-blue-600 hover:underline">here</a>
                , or you may continue with the following simplified guide (Docker Deployment):</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Clone the Caldera GitHub repository using the following command:
                  <CopyCodeButton code="clone https://github.com/mitre/caldera.git --recursive --branch 5.2.0"/>
                </li>
                <li>Navigate to the newly created Caldera directory, and run the following command to build the docker
                  image:
                  <CopyCodeButton code="docker build --build-arg WIN_BUILD=true . -t caldera:server"/>
                </li>
                <li>Run the Caldera server using the following command:
                  <CopyCodeButton
                      code="docker run -p 7010:7010 -p 7011:7011/udp -p 7012:7012 -p 8888:8888 caldera:server"/>
                </li>
                <li>Once you see the Caldera logo in the terminal, you should be able to access the web interface at <a target='_blank' rel="noreferrer"
                                                                                                       href="https://0.0.0.0:8888"
                                                                                                       className="text-blue-600 hover:underline">https://0.0.0.0:8888</a>.
                  <img
                      src="/images/agents/caldera.png"
                      alt="Caldera Web Interface"
                      className="mr-6 mb-4 w-[800px] rounded-lg shadow-md"
                  />
                </li>
                <p>You can find the default login and other information like the API key in caldera/conf/default.yml.</p>
              </ol>

            </div>
          </div>
        </section>

        <NavButtons
            previous={{
              text: "Installing Docker",
              link: "/agents/venv"
            }}
            next={{
              text: "Installing CSLA",
              link: "/agents/setup"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default CalderaSetup;
