import React from 'react';
import RaptorLayout from '../../components/layout/RaptorLayout';
import NavButtons from '../../components/shared/NavButtons';
import CopyCodeButton from '../../components/shared/CopyCodeButton';
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
            <p>
              Python is essential for running LPW as the program is written in Python. LPW relies on Python's capabilities to 
              process and analyze packet data, interact with the LLM, and provide a user-friendly interface. Without Python 
              installed, you won't be able to execute the LPW scripts and run the program.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Installation Steps</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download Python 3.12 from this <a target='_blank' rel="noreferrer" href="https://www.python.org/downloads/release/python-3120/" className="text-blue-600 hover:underline">link</a>. (Note that our setup guide does not work with Python 3.13)</li>
                <li>During installation, check "Add Python to PATH" 
                  <img 
                    src="/images/python_addtopath.png" 
                    alt="python Add to Path" 
                    className="mr-6 mb-4 w-[400px] rounded-lg shadow-md"
                  />
                </li>
                <li>Verify python installation:</li>
              </ol>
              
              <CodeBlock code={`Windows
python --version

Linux/MacOS
python3 --version`} />
              
              <ol className="list-decimal list-inside space-y-2" start="4">
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