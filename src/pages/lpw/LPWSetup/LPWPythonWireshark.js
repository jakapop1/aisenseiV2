import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CodeBlock from '../../../components/shared/CodeBlock';

const LPWPythonWireshark = () => {
  return (
    <LPWLayout>
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
                <li>Download <a target='_blank' rel="noreferrer" href="https://www.python.org/downloads/release/python-3120/" className="text-blue-600 hover:underline">Python 3.12</a> <strong>(LPW does not function on Python 3.13+)</strong></li>
                <li>During installation, check "Add Python to PATH" 
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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Install Wireshark</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Why Wireshark?</h3>
            <p className="mb-4">
              Wireshark is a powerful and widely used network protocol analyzer. It allows you to capture, inspect, and analyze 
              network traffic in real-time or from previously captured packet data. Wireshark provides a graphical user interface 
              (GUI) for easy navigation and analysis of network packets, making it accessible to both beginners and experienced 
              network professionals.
            </p>
            <p>
              LPW utilizes Wireshark's command-line utility, TShark, to process and extract relevant information from PCAP files. 
              TShark is a crucial component that enables LPW to convert the binary packet data into a format that can be fed to 
              the LLM for analysis. Without Wireshark and its TShark executable, LPW would not be able to handle and process the 
              packet capture files effectively.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Installation Steps</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Visit <a target='_blank' rel="noreferrer" href="https://wireshark.org/download.html" className="text-blue-600 hover:underline">wireshark.org/download.html</a></li>
                <li>Download and install the appropriate version for your operating system</li>
                <li>Follow the default installation options</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Linux Installation</h3>
              <CodeBlock code={`# Ubuntu/Debian
sudo apt update
sudo apt install wireshark
sudo usermod -a -G wireshark $USER

# Fedora
sudo dnf install wireshark

# Verify TShark installation
tshark --version`} />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Verification</h2>
          <p className="mb-4">After installation, verify that both tools are installed and working correctly:</p>
          <CodeBlock code={`# Python verification
python -c "import sys; print(sys.version)" 

# TShark verification
tshark -v`} />
        </section>

        <NavButtons 
          previous={{
            link: "/lpw/introduction",
            text: "Introduction to LPW"
          }}
          next={{
            link: "/lpw/ollama",
            text: "Installing Ollama"
          }}
        />
      </div>
    </LPWLayout>
  );
};

export default LPWPythonWireshark;