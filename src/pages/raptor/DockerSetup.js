import React from 'react';
import RaptorLayout from '../../components/layout/RaptorLayout';
import NavButtons from '../../components/shared/NavButtons';
import CodeBlock from '../../components/shared/CodeBlock';

const DockerSetup = () => {
  return (
    <RaptorLayout>
      <div className="lpw-content">
        <h1 className="text-3xl font-bold mb-8">Installing Docker</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is Docker and Why Do We Need It?</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="mb-2"><strong>In simple terms:</strong> Docker is like a container that allows software to run the same way on any computer.</p>
            <p>Think of it as a shipping container that packages everything needed for an application to work correctly, regardless of what computer you're using.</p>
          </div>

          <p className="mb-4">
            LPW uses Docker to ensure that all the required software components work together perfectly,
            without you having to worry about installing and configuring each piece separately.
            This makes setup much easier and prevents common "it works on my computer but not yours" problems.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Step-by-Step Installation Guide</h2>

          {/* Windows Instructions */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4">
              <img src="/images/windows-logo.png" alt="Windows logo" className="w-6 h-6 inline-block mr-2" />
              Windows Installation
            </h3>

            <div className="mb-4">
              <h4 className="font-medium mb-2">System Requirements:</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Windows 10 64-bit: Pro, Enterprise, or Education (Build 18362 or later)</li>
                <li>Windows 11 64-bit</li>
                <li>At least 4GB of RAM</li>
              </ul>
            </div>

            <ol className="list-decimal list-inside space-y-4">
              <li className="mb-2">
                <span className="font-medium">Enable WSL 2 (Windows Subsystem for Linux)</span>
                <p className="mt-1 ml-6">Open PowerShell as Administrator and run:</p>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`wsl --install`} />
                </div>
                <p className="mt-1 ml-6">Restart your computer when prompted.</p>
              </li>

              <li className="mb-2">
                <span className="font-medium">Download Docker Desktop</span>
                <p className="mt-1 ml-6">Visit the <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Docker Desktop website</a> and click the "Download for Windows" button.</p>
              </li>

              <li className="mb-2">
                <span className="font-medium">Install Docker Desktop</span>
                <p className="mt-1 ml-6">Double-click the downloaded file (Docker Desktop Installer.exe) and follow these steps:</p>
                <ul className="list-disc list-inside ml-10 mt-2 space-y-1">
                  <li>Ensure "Use WSL 2 instead of Hyper-V" is selected</li>
                  <li>Follow the installation wizard instructions</li>
                  <li>Click "Finish" when the installation completes</li>
                </ul>
              </li>

              <li className="mb-2">
                <span className="font-medium">Start Docker Desktop</span>
                <p className="mt-1 ml-6">Look for Docker Desktop in your Start menu and launch it. You'll see the Docker icon appear in your system tray when it's running.</p>
              </li>

              <li>
                <span className="font-medium">Verify Installation</span>
                <p className="mt-1 ml-6">Open Command Prompt or PowerShell and run:</p>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`docker --version
docker-compose --version`} />
                </div>
                <p className="mt-1 ml-6">Both commands should display version information, confirming successful installation.</p>
              </li>
            </ol>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="font-medium">Troubleshooting Tips:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>If Docker fails to start, ensure that WSL 2 is properly installed</li>
                <li>Verify virtualization is enabled in your BIOS settings</li>
                <li>For Windows Home users, ensure you're using Docker Desktop version 3.0 or newer</li>
              </ul>
            </div>
          </div>

          {/* macOS Instructions */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4">
              <img src="/images/apple-logo.png" alt="Apple logo" className="w-6 h-6 inline-block mr-2" />
              macOS Installation
            </h3>

            <div className="mb-4">
              <h4 className="font-medium mb-2">System Requirements:</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>macOS 11 (Big Sur) or newer</li>
                <li>At least 4GB of RAM</li>
                <li>Intel or Apple Silicon (M1/M2/M3) processor</li>
              </ul>
            </div>

            <ol className="list-decimal list-inside space-y-4">
              <li className="mb-2">
                <span className="font-medium">Download Docker Desktop</span>
                <p className="mt-1 ml-6">Visit the <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Docker Desktop website</a> and click "Download for Mac".</p>
                <p className="mt-1 ml-6"><strong>Important:</strong> Select the correct version for your Mac:</p>
                <ul className="list-disc list-inside ml-10 mt-2 space-y-1">
                  <li>For Intel Macs: Download Mac with Intel Chip</li>
                  <li>For Apple Silicon Macs (M1/M2/M3): Download Mac with Apple Chip</li>
                </ul>
              </li>

              <li className="mb-2">
                <span className="font-medium">Install Docker Desktop</span>
                <p className="mt-1 ml-6">Double-click the downloaded .dmg file and follow these steps:</p>
                <ul className="list-disc list-inside ml-10 mt-2 space-y-1">
                  <li>Drag the Docker icon to the Applications folder</li>
                  <li>Open your Applications folder and double-click Docker to start it</li>
                  <li>You may need to approve system extensions in Security & Privacy preferences</li>
                </ul>
                <img
                  src="/images/macos-docker-install.png"
                  alt="Drag Docker to Applications folder"
                  className="mt-2 ml-6 w-72 rounded-lg shadow-md"
                />
              </li>

              <li className="mb-2">
                <span className="font-medium">Start Docker Desktop</span>
                <p className="mt-1 ml-6">Docker icon will appear in the menu bar when it's running.</p>
              </li>

              <li>
                <span className="font-medium">Verify Installation</span>
                <p className="mt-1 ml-6">Open Terminal and run:</p>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`docker --version
docker-compose --version`} />
                </div>
              </li>
            </ol>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="font-medium">Note for Apple Silicon (M1/M2/M3) Users:</p>
              <p className="mt-1">Docker on Apple Silicon supports most features, but you may occasionally encounter compatibility issues with some container images. If you experience problems, check if there's an ARM64/Apple Silicon version of the container available.</p>
            </div>
          </div>

          {/* Linux Instructions */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              <img src="/images/linux-logo.png" alt="Linux logo" className="w-6 h-6 inline-block mr-2" />
              Linux Installation
            </h3>

            <div className="mb-4">
              <h4 className="font-medium mb-2">System Requirements:</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>64-bit Linux distribution (Ubuntu, Debian, Fedora, etc.)</li>
                <li>Kernel version 3.10 or newer</li>
                <li>At least 4GB of RAM</li>
              </ul>
            </div>

            <h4 className="font-medium mt-4 mb-2">Option 1: Docker Desktop for Linux (Recommended for Beginners)</h4>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="font-medium">Download Docker Desktop</span>
                <p className="mt-1 ml-6">Visit the <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Docker Desktop website</a> and select your Linux distribution (Ubuntu, Debian, Fedora, or Arch).</p>
              </li>

              <li>
                <span className="font-medium">Install Docker Desktop</span>
                <p className="mt-1 ml-6">Follow the installation instructions for your specific distribution shown on the download page.</p>
              </li>

              <li>
                <span className="font-medium">Start Docker Desktop</span>
                <p className="mt-1 ml-6">Launch Docker Desktop from your applications menu or run:</p>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`systemctl --user start docker-desktop`} />
                </div>
              </li>
            </ol>

            <h4 className="font-medium mt-6 mb-2">Option 2: Command Line Installation (Ubuntu/Debian)</h4>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="font-medium">Update your package index</span>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`sudo apt update
sudo apt install ca-certificates curl gnupg`} />
                </div>
              </li>

              <li>
                <span className="font-medium">Add Docker's official GPG key</span>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg`} />
                </div>
              </li>

              <li>
                <span className="font-medium">Set up the repository</span>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`} />
                </div>
              </li>

              <li>
                <span className="font-medium">Install Docker Engine and Docker Compose</span>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin`} />
                </div>
              </li>

              <li>
                <span className="font-medium">Add your user to the docker group (to run Docker without sudo)</span>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`sudo usermod -aG docker $USER
newgrp docker`} />
                </div>
              </li>

              <li>
                <span className="font-medium">Verify installation</span>
                <div className="ml-6 mt-2">
                  <CodeBlock code={`docker --version
docker compose version`} />
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Verifying Docker Installation</h2>

          <p className="mb-4">After installing Docker, you should run a quick test to make sure everything is working correctly:</p>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-medium mb-2">Run this command in your terminal (Command Prompt, PowerShell, or Terminal):</p>
            <CodeBlock code={`docker run --rm hello-world`} />

            <p className="mt-4 mb-2">You should see a message that includes:</p>
            <div className="bg-gray-100 p-3 rounded text-sm">
              <pre>Hello from Docker!
This message shows that your installation appears to be working correctly.</pre>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4">
            <p><strong>Success!</strong> If you saw the "Hello from Docker!" message, Docker is installed correctly and you're ready to proceed.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Issues & Solutions</h2>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-2">Error: "Cannot connect to the Docker daemon"</h3>
              <p className="mb-2"><strong>Solution:</strong> Make sure Docker Desktop is running. Look for the Docker icon in your system tray or menu bar and start it if needed.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-2">Windows: "WSL 2 installation is incomplete"</h3>
              <p className="mb-2"><strong>Solution:</strong> Open PowerShell as Administrator and run:</p>
              <CodeBlock code={`wsl --update`} />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-2">Permission denied errors on Linux</h3>
              <p className="mb-2"><strong>Solution:</strong> Make sure you've added your user to the docker group:</p>
              <CodeBlock code={`sudo usermod -aG docker $USER
newgrp docker`} />
              <p className="mt-2">Then log out and log back in, or restart your computer.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-2">Docker Desktop is slow to start</h3>
              <p><strong>Solution:</strong> This is normal, especially on first launch. Give it a few minutes to complete startup.</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-medium">Need more help?</p>
            <p className="mt-1">If you're still having issues, visit the <a href="https://docs.docker.com/desktop/troubleshoot/overview/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Docker Troubleshooting Guide</a> or reach out to our support team.</p>
          </div>
        </section>
      </div>

      <NavButtons
        previous = {{
          link: "/raptor/python",
          text: "Python Setup"
        }}
        next={{
          link: "/raptor/raptor-config",
          text: "Packet Raptor Configuration"
        }}
      />
    </RaptorLayout>
  );
};

export default DockerSetup;