import React from 'react';
import RaptorLayout from '../../components/layout/RaptorLayout';
import NavButtons from '../../components/shared/NavButtons';

const DemoGuide = () => {
  return (
    <RaptorLayout>
      <div className="lpw-content">
        <h1>Understanding the Packet Raptor Demo</h1>
        
        <section className="mb-8">
          <h2>About This Demo</h2>
          <p>
            This interactive demo simulates how Packet Raptor processes and analyzes network traffic data. 
            While it uses pre-configured responses for demonstration purposes, the interface and workflow 
            mirror the actual tool, giving you hands-on experience with:
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>The file upload process</li>
            <li>Model selection and configuration</li>
            <li>How the RAPTOR tree structure organizes packet data</li>
            <li>Interacting with your packet data through natural language</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>How to Use the Demo</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Upload a PCAP File</h3>
              <p>
                Click "Browse files" to select from available PCAP files. The demo includes 
                example files like "icmp_in_l2tpv3.pcap" that showcase different types of 
                network traffic.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2. Select a Model</h3>
              <p>
                Choose the Llama 3.2 model from the dropdown. In the actual tool, you'll 
                have access to various models.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3. Analyze the Summary</h3>
              <p>
                Watch as Packet Raptor processes the PCAP file and generates a detailed summary. 
                This demonstrates how the tool:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Extracts key information from packet data</li>
                <li>Organizes findings into a hierarchical structure</li>
                <li>Identifies important network patterns and behaviors</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">4. Ask Questions</h3>
              <p>
                Try asking questions about the packet data. For example:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>"What is the source IP address?"</li>
                <li>"What protocols are being used?"</li>
                <li>"Is there anything unusual about this traffic?"</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="space-y-8">
      <section>
        <h3 className="text-xl font-semibold mb-4">General Questions (Any PCAP)</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>What can you tell me about this packet capture?</li>
          <li>What are the source and destination IPs?</li>
          <li>What are the MAC addresses involved?</li>
          <li>Can you show me the traffic patterns?</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">DHCP Traffic Analysis</h3>
        <div className="bg-gray-200 rounded-lg mb-2 inline-block p-2">
          <p className="text-sm text-gray-400 italic">For PCAP files containing DHCP exchanges</p>
        </div>
        <ul className="list-disc ml-6 space-y-2">
          <li>What is the DHCP server IP?</li>
          <li>Can you visualize this DHCP exchange?</li>
          <li>Can you create a mind map of the DHCP frames and highlight latency?</li>
          <li>What's the timing between DHCP discover and offer?</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Security Analysis</h3>
        <div className="bg-gray-200 rounded-lg mb-2 inline-block p-2">
          <p className="text-sm text-gray-400 italic">For potentially suspicious traffic</p>
        </div>
        <ul className="list-disc ml-6 space-y-2">
          <li>Are there any possible security concerns in this packet?</li>
          <li>Are there any signs of a specific attack (e.g., teardrop attack)?</li>
          <li>Is there any unusual or unexpected traffic?</li>
          <li>Are there any malformed packets?</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Protocol-Specific Analysis</h3>
        <div className="bg-gray-200 rounded-lg mb-2 inline-block p-2">  
          <p className="text-sm text-gray-400 italic">For specific protocols like BGP, EIGRP</p>  
        </div>  
        <ul className="list-disc ml-6 space-y-2">
          <li>What kind of BGP traffic patterns do you see?</li>
          <li>Can you explain this EIGRP traffic like I'm studying for my CCNA?</li>
          <li>What's the round-trip time for these protocol exchanges?</li>
          <li>Are there any protocol anomalies?</li>
        </ul>
      </section>

      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mt-8">
        <h3 className="text-lg font-semibold text-yellow-200 mb-2">Important Notes:</h3>
        <ul className="list-disc ml-6 text-black">
          <li>Use Wireshark first to filter and focus your capture on relevant traffic</li>
          <li>Remember this is an analysis aid - verify findings with your expertise and tools</li>
          <li>Questions can be asked in any language</li>
        </ul>
      </div>
    </div>
        </section>

        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 my-6">
          <h3 className="text-blue-200 font-bold mb-2">Pro Tips:</h3>
          <ul className="list-disc ml-6 text-black">
            <li>Try asking follow-up questions - the model maintains context</li>
            <li>Experiment with different types of questions to see how the model responds</li>
            <li>Pay attention to how information is organized in the summaries</li>
          </ul>
        </div>

        <NavButtons 
          previous={{
            link: "/raptor/try-packet-raptor",
            text: "Try the Demo"
          }}
        />
      </div>
    </RaptorLayout>
  );
};

export default DemoGuide;