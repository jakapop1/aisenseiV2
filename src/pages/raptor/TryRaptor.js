import React from 'react';
import RaptorLayout from '../../components/layout/RaptorLayout';
import PacketRaptor from './PacketRaptor';
import NavButtons from '../../components/shared/NavButtons';

const TryRaptor = () => {
  return (
    <RaptorLayout>
      <div className="lpw-content">
        <h1>Interactive Packet Raptor Demo</h1>
        
        <section className="mb-8">
          <p className="mb-4">
            Experience how Packet Raptor works through this interactive simulation. 
            This demo showcases the key features of Packet Raptor including:
          </p>
          
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>PCAP file upload and processing</li>
            <li>AI model selection</li>
            <li>Tree-based packet summarization</li>
            <li>Interactive Q&A with your packet data</li>
          </ul>

          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 pb-1 mb-8">
            <p className="text-yellow-200 text-sm">
              Note: This is a simulation designed to demonstrate Packet Raptor's functionality. 
              While the interactions are real, the analysis is pre-configured for demonstration purposes.
            </p>
          </div>
        </section>

        {/* Simulation Component */}
        <PacketRaptor />
        
        <NavButtons 
          previous={{
            link: "/raptor/python",
            text: "Packet Raptor Setup"
          }}
          next={{
            link: "/raptor/using-the-demo",
            text: "Using the Demo"
          }}
        />
      </div>
    </RaptorLayout>
  );
};

export default TryRaptor;