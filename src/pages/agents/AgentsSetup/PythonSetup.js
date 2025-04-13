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
            <h3 className="text-xl font-semibold mb-3">Why Python?</h3>
            <p className="mb-4">
              Python is a versatile and beginner-friendly programming language known for its simplicity and extensive
              libraries.
              It is widely used for various applications, including web development, data analysis, artificial
              intelligence, and more.
              Python provides a clear and concise syntax, making it easier for developers to write and maintain code.
              CSLA is written in Python, so you won't be able to execute the CSLA
              scripts or run the program without it.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Installation Steps</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download the <a target='_blank' rel="noreferrer"
                                href="https://www.python.org/downloads/"
                                className="text-blue-600 hover:underline">Python installer</a>.</li>
                <li>Follow the installation instructions. Make sure to check "Add python.exe to PATH".
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
            link: "/agents/introduction2",
            text: "What is cyber-security-llm-agents?"
          }}
          next={{
            link: "/agents/caldera",
            text: "Installing Caldera"
          }}
        />
      </div>
    </AgentsLayout>
  );
};

export default PythonSetup;