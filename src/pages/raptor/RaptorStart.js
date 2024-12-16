import React from 'react';
import RaptorLayout from '../../components/layout/RaptorLayout';
import NavButtons from '../../components/shared/NavButtons';
import CopyCodeButton from '../../components/shared/CopyCodeButton';

const RaptorStart = () => {
  return (
    <RaptorLayout>
      <div className="lpw-content">
        <h1>Starting Packet Raptor</h1>

        <section className="mb-8">
          <h2>1. Start Docker Services</h2>
          <p className="mb-4">In Terminal, run:</p>
          <CopyCodeButton code="docker-compose up ollama ollama-webui" />
          <p className="mt-2 text-gray-400">Wait until the text stops scrolling</p>
        </section>

        <section className="mb-8">
          <h2>2. Download a Model</h2>
          <ol className="list-disc ml-6 space-y-2">
            <li>Open your web browser</li>
            <li>Go to <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:3002</code></li>
            <li>Create an account</li>
            <li>Go to Models section</li>
            <li>Download a model. See list of models <a target='_blank' rel="noreferrer" href="https://ollama.com/library" className="text-blue-600 hover:underline">here</a></li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>3. Start Packet Raptor</h2>
          <p className="mb-4">Open a new Terminal window and run:</p>
          <CopyCodeButton 
            code={`cd packet_raptor
source venv/bin/activate
python3 -m streamlit run packet_raptor/packet_raptor.py`}
          />
        </section>

        <section className="mb-8">
          <h2>4. Use Packet Raptor</h2>
          <ol className="list-disc ml-6 space-y-2">
            <li>Open your browser</li>
            <li>Go to <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:8501</code></li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>Stopping Everything</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Press Ctrl+C twice in both Terminal windows</li>
            <li>Close Docker Desktop</li>
          </ul>
        </section>

        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 my-6">
          <h3 className="text-black font-bold mb-2">Need Help?</h3>
          <ul className="list-disc ml-6 text-black">
            <li>If you see "command not found", make sure you're in the right directory and environment</li>
            <li>If you get error messages, they usually tell you what's wrong - read them carefully</li>
          </ul>
        </div>

        <NavButtons 
          previous={{
            link: "/raptor/raptor-config",
            text: "Packet Raptor Configuration"
          }}
          next={{
            link: "/raptor/try-packet-raptor",
            text: "Try the Demo"
          }}
        />
      </div>
    </RaptorLayout>
  );
};

export default RaptorStart;