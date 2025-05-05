import React from 'react';
import AgentsLayout from '../../../components/layout/AgentsLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CodeBlock from '../../../components/shared/CodeBlock';

const PythonSetup = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1 className="text-3xl font-bold mb-8">Installing Python</h1>
        
        <section className="mb-12">

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">What is Python?</h2>
            <p className="mb-4">
              To use CSLA, you’ll need to have Python installed on your system. Python is a popular, beginner-friendly
              programming language that powers the CSLA framework. It’s known for its simple syntax, strong community
              support, and wide use in fields like cybersecurity, AI, data science, and automation. Since CSLA is
              written entirely in Python, installing it is a required first step before running any actions or setting
              up agents. The installation process is straightforward and works across all major operating systems.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Installation Steps</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download the <a target='_blank' rel="noreferrer"
                                    href="https://www.python.org/downloads/"
                                    className="text-blue-600 hover:underline">Python installer</a>.
                </li>
                <li>Run the installer and follow the instructions. Make sure to check "Add python.exe to PATH".
                  <img
                      src="/images/python_addtopath.png"
                    alt="python Add to Path" 
                    className="mr-6 mb-4 w-[400px] rounded-lg shadow-md"
                  />
                </li>
                <li>Verify Python installation:</li>
              
              
              <CodeBlock code={`Windows
python --version

Linux/MacOS
python3 --version`} />
            <li>Verify pip installation:</li>
              </ol>
              
              <CodeBlock code={`Windows/Linux
pip --version
              
Install pip if missing:
python -m ensurepip --default-pip

Upgrade pip:
python -m pip install --upgrade pip`} />
            </div>
          </div>
        </section>


        <NavButtons 
          previous={{
            link: "/agents/introduction3",
            text: "Video Walkthrough"
          }}
          next={{
            link: "/agents/venv",
            text: "Installing Docker"
          }}
        />
      </div>
    </AgentsLayout>
  );
};

export default PythonSetup;