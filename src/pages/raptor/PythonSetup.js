import React from 'react';
import RaptorLayout from '../../components/layout/RaptorLayout';
import NavButtons from '../../components/shared/NavButtons';
import CodeBlock from '../../components/shared/CodeBlock';

const PythonSetup = () => {
  return (
    <RaptorLayout>
      <div className="lpw-content">
        <h1 className="text-3xl font-bold mb-8">Installing Prerequisites for LPW</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Install Python</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Why Python?</h3>
            <p className="mb-4">
              Python is a versatile and beginner-friendly programming language known for its simplicity and extensive libraries.
              It is widely used for various applications, including web development, data analysis, artificial intelligence, and more.
              Python provides a clear and concise syntax, making it easier for developers to write and maintain code.
            </p>
            <p className="mb-4">
              Python is essential for running LPW as the program is written in Python. LPW relies on Python's capabilities to
              process and analyze packet data, interact with the LLM, and provide a user-friendly interface. Without Python
              installed, you won't be able to execute the LPW scripts and run the program.
            </p>
            <p className="mb-4">
              LPW requires Python 3.12. Note that our setup guide does not work with Python 3.13 or earlier versions.
            </p>
          </div>

          <div className="space-y-8">
            {/* Windows Installation */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Windows Installation</h3>
              <ol className="list-decimal list-inside space-y-3">
                <li>Download the official Python 3.12 installer from the <a target='_blank' rel="noreferrer" href="https://www.python.org/downloads/release/python-3120/" className="text-blue-600 hover:underline">Python website</a>.</li>
                <li>Run the installer. <strong>Important:</strong> Check the box that says "Add Python to PATH" before proceeding with the installation.
                  <img
                    src="/images/python_addtopath.png"
                    alt="Python Add to Path checkbox in Windows installer"
                    className="my-4 w-[400px] rounded-lg shadow-md"
                  />
                </li>
                <li>Choose "Customize installation" if you want to change the installation location or select specific features.</li>
                <li>Click "Install Now" and wait for the installation to complete.</li>
                <li>Verify Python installation by opening Command Prompt and running:</li>
              </ol>

              <CodeBlock code={`python --version`} />

              <p className="mt-3 mb-3">The output should display Python 3.12.x</p>

              <ol className="list-decimal list-inside space-y-3" start="6">
                <li>Verify pip installation by running:</li>
              </ol>

              <CodeBlock code={`pip --version`} />

              <p className="mt-3 mb-3">If pip is missing, install it with:</p>

              <CodeBlock code={`python -m ensurepip --default-pip`} />

              <p className="mt-3 mb-3">It's recommended to upgrade pip to the latest version:</p>

              <CodeBlock code={`python -m pip install --upgrade pip`} />

              <p className="mt-3">If you encounter permission errors, run Command Prompt as Administrator.</p>
            </div>

            {/* macOS Installation */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">macOS Installation</h3>
              <p className="mb-3">There are several ways to install Python on macOS:</p>

              <h4 className="font-semibold mt-4 mb-2">Method 1: Official Installer</h4>
              <ol className="list-decimal list-inside space-y-3">
                <li>Download the macOS installer from the <a target='_blank' rel="noreferrer" href="https://www.python.org/downloads/release/python-3120/" className="text-blue-600 hover:underline">Python website</a>.</li>
                <li>Open the downloaded .pkg file and follow the installation instructions.</li>
                <li>Verify Python installation by opening Terminal and running:</li>
              </ol>

              <CodeBlock code={`python3 --version`} />

              <h4 className="font-semibold mt-4 mb-2">Method 2: Using Homebrew (Recommended)</h4>
              <ol className="list-decimal list-inside space-y-3">
                <li>Install Homebrew if you don't have it already:</li>
              </ol>

              <CodeBlock code={`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`} />

              <ol className="list-decimal list-inside space-y-3" start="2">
                <li>Install Python 3.12 using Homebrew:</li>
              </ol>

              <CodeBlock code={`brew install python@3.12`} />

              <ol className="list-decimal list-inside space-y-3" start="3">
                <li>Add Python to your PATH (if not automatically added):</li>
              </ol>

              <CodeBlock code={`echo 'export PATH="/usr/local/opt/python@3.12/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc`} />

              <p className="mt-3 mb-3">Note: If you're using bash instead of zsh, replace .zshrc with .bash_profile</p>

              <ol className="list-decimal list-inside space-y-3" start="4">
                <li>Verify Python and pip installation:</li>
              </ol>

              <CodeBlock code={`python3 --version
pip3 --version`} />

              <p className="mt-3 mb-3">To upgrade pip:</p>

              <CodeBlock code={`pip3 install --upgrade pip`} />

              <p className="mt-3 text-yellow-600">Note for Apple Silicon (M1/M2/M3) users: Some Python packages may require Rosetta 2. Install it by running:</p>

              <CodeBlock code={`softwareupdate --install-rosetta`} />
            </div>

            {/* Linux Installation */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Linux Installation</h3>

              <h4 className="font-semibold mt-1 mb-2">Ubuntu/Debian-based distributions</h4>
              <ol className="list-decimal list-inside space-y-3">
                <li>Update your package list:</li>
              </ol>

              <CodeBlock code={`sudo apt update`} />

              <ol className="list-decimal list-inside space-y-3" start="2">
                <li>Install required dependencies:</li>
              </ol>

              <CodeBlock code={`sudo apt install software-properties-common build-essential libssl-dev libffi-dev python3-dev`} />

              <ol className="list-decimal list-inside space-y-3" start="3">
                <li>Add the deadsnakes PPA repository (for Python 3.12):</li>
              </ol>

              <CodeBlock code={`sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update`} />

              <ol className="list-decimal list-inside space-y-3" start="4">
                <li>Install Python 3.12:</li>
              </ol>

              <CodeBlock code={`sudo apt install python3.12 python3.12-venv python3.12-dev`} />

              <ol className="list-decimal list-inside space-y-3" start="5">
                <li>Install pip:</li>
              </ol>

              <CodeBlock code={`curl -sS https://bootstrap.pypa.io/get-pip.py | sudo python3.12`} />

              <ol className="list-decimal list-inside space-y-3" start="6">
                <li>Verify the installation:</li>
              </ol>

              <CodeBlock code={`python3.12 --version
pip3 --version`} />

              <h4 className="font-semibold mt-6 mb-2">Fedora/RHEL-based distributions</h4>
              <ol className="list-decimal list-inside space-y-3">
                <li>Update your system:</li>
              </ol>

              <CodeBlock code={`sudo dnf update`} />

              <ol className="list-decimal list-inside space-y-3" start="2">
                <li>Install Python 3.12:</li>
              </ol>

              <CodeBlock code={`sudo dnf install python3.12 python3.12-devel`} />

              <ol className="list-decimal list-inside space-y-3" start="3">
                <li>Install pip:</li>
              </ol>

              <CodeBlock code={`curl -sS https://bootstrap.pypa.io/get-pip.py | sudo python3.12`} />

              <ol className="list-decimal list-inside space-y-3" start="4">
                <li>Verify installation:</li>
              </ol>

              <CodeBlock code={`python3.12 --version
pip3 --version`} />

              <h4 className="font-semibold mt-6 mb-2">Arch Linux</h4>
              <ol className="list-decimal list-inside space-y-3">
                <li>Update your system:</li>
              </ol>

              <CodeBlock code={`sudo pacman -Syu`} />

              <ol className="list-decimal list-inside space-y-3" start="2">
                <li>Install Python 3.12:</li>
              </ol>

              <CodeBlock code={`sudo pacman -S python`} />

              <p className="mt-3 mb-3">Note: Arch Linux typically provides the latest stable Python version in its repositories.</p>

              <ol className="list-decimal list-inside space-y-3" start="3">
                <li>Verify installation:</li>
              </ol>

              <CodeBlock code={`python --version
pip --version`} />
            </div>

            {/* Troubleshooting */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Troubleshooting Common Issues</h3>

              <h4 className="font-semibold mt-1 mb-2">Python Not Found After Installation</h4>
              <p className="mb-3">This is usually a PATH issue. Here's how to fix it:</p>

              <h5 className="font-medium mt-3 mb-1">Windows:</h5>
              <ol className="list-decimal list-inside space-y-2">
                <li>Search for "Environment Variables" in the Start menu</li>
                <li>Click "Edit the system environment variables"</li>
                <li>Click "Environment Variables" button</li>
                <li>Under "System variables" find the "Path" variable, select it and click "Edit"</li>
                <li>Add the Python installation directory (usually C:\Python312 and C:\Python312\Scripts)</li>
                <li>Click OK and restart your command prompt</li>
              </ol>

              <h5 className="font-medium mt-3 mb-1">macOS/Linux:</h5>
              <p className="mb-2">Add Python to your PATH by editing your shell configuration file:</p>

              <CodeBlock code={`# For bash
echo 'export PATH="/usr/local/bin/python3.12:$PATH"' >> ~/.bash_profile
source ~/.bash_profile

# For zsh
echo 'export PATH="/usr/local/bin/python3.12:$PATH"' >> ~/.zshrc
source ~/.zshrc`} />

              <h4 className="font-semibold mt-4 mb-2">Multiple Python Versions</h4>
              <p className="mb-3">If you have multiple Python versions installed, you can specify the version by using python3.12 instead of python or python3 in your commands.</p>

              <p className="mb-3">Alternatively, consider using a virtual environment for LPW:</p>

              <CodeBlock code={`# Create a virtual environment
python3.12 -m venv lpw_env

# Activate the virtual environment
# On Windows:
lpw_env\\Scripts\\activate

# On macOS/Linux:
source lpw_env/bin/activate`} />

              <h4 className="font-semibold mt-4 mb-2">Permission Denied Errors</h4>
              <p className="mb-2">If you encounter permission issues when installing packages:</p>

              <p className="mb-2">Windows: Run Command Prompt as Administrator</p>
              <p className="mb-2">macOS/Linux: Use sudo or install packages with the --user flag:</p>

              <CodeBlock code={`pip3 install --user package_name`} />
            </div>
          </div>
        </section>
      </div>
      <NavButtons
        previous = {{
          link: "/raptor/introduction",
          text: "Introduction to Packet Raptor"
        }}
        next={{
          link: "/raptor/docker",
          text: "Docker Setup"
        }}
      />
    </RaptorLayout>
  );
};

export default PythonSetup;