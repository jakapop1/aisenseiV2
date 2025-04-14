import React from 'react';
import AgentsLayout from '../../../components/layout/AgentsLayout';
import NavButtons from '../../../components/shared/NavButtons';

const VenvSetup = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>Installing Docker</h1>

        <section className="mb-12">

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">What is Docker?</h2>
            <p className="mb-4">
              To run many of the included actions in CSLA—especially those involving red team simulation—you’ll need to
              install Docker. Docker is a containerization platform that allows you to run applications in isolated,
              lightweight environments. This guide uses Docker to deploy MITRE Caldera, which is required for several
              core
              actions like privilege detection, agent interaction, and adversary emulation. Installing Docker ensures
              that
              Caldera can run consistently across systems without complex manual setup, making it an essential component
              of our CSLA environment.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Installation Steps</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download the <a target='_blank' rel="noreferrer"
                                    href="https://www.docker.com/get-started/"
                                    className="text-blue-600 hover:underline">Docker Desktop installer</a>, making sure
                  to select the correct version for your device.
                </li>
                <li>Run the installer and follow the instructions.
                  <img
                      src="/images/agents/docker1.png"
                      alt="Docker Installer"
                      className="mr-6 mb-4 w-[400px] rounded-lg shadow-md"
                  />
                </li>
                <li>Verify Docker installation by running Docker Desktop. You will need it for the next tool, so keep it open.</li>
                <img
                    src="/images/agents/docker2.png"
                    alt="Docker Desktop Running"
                    className="mr-6 mb-4 w-[700px] rounded-lg shadow-md"
                />
              </ol>
            </div>
          </div>
        </section>


        <NavButtons
            previous={{
              text: "Installing Python",
              link: "/agents/python"
            }}
            next={{
              text: "Installing Caldera",
              link: "/agents/caldera"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default VenvSetup;
