import React from 'react';
import RaptorLayout from '../../components/layout/RaptorLayout';
import NavButtons from '../../components/shared/NavButtons';

const RaptorLanding = () => {
  return (
    <RaptorLayout>
      <div className="lpw-content">
        <h1>Introduction to Packet Raptor</h1>
        
        <section className="mb-8">
          <h2>What is Packet Raptor?</h2>
          <p>
            Packet Raptor is a tool that helps network analysts and security professionals understand their network traffic data (PCAPs) more easily by allowing them to have a natural conversation with it. Instead of scrolling through complex packet data or writing intricate filters, you can simply upload your packet capture and ask questions in plain English about what's happening in your network.
          </p>
          
          <h2>Why AI for Network Analysis?</h2>
          <p>
  In today's networks, the sheer volume of traffic data can be overwhelming. A single hour of network activity 
  can generate thousands of packets, each containing crucial information. While traditional tools like Wireshark 
  excel at capturing and displaying this data, they still rely on the analyst to:
  <ul className="list-disc ml-6 space-y-2">
    <li>Identify important patterns</li>
    <li>Spot potential security issues</li>
    <li>Understand complex protocol interactions</li>
    <li>Connect related pieces of information</li>
  </ul>
  This is where AI, specifically Packet Raptor, comes in - not to replace these tools, but to help analysts 
  navigate and understand their data more efficiently.
</p>
          
          <h2>The Problem</h2>
          <p>
            Network traffic analysis traditionally requires:
              <ul className="list-disc ml-6 space-y-2">
                <li>Deep technical expertise in tools like Wireshark</li>
                <li>Writing complex filters to find specific traffic</li>
                <li>Manual inspection of packet details</li>
                <li>Time-consuming pattern recognition</li>
                <li>Switching between multiple tools</li>
                <li>Significant experience to effectively analyze network data</li>
              </ul>
            This creates a high barrier to entry for newcomers and can slow down even experienced analysts who need to quickly understand what's happening in their network.

        <h3>Impact on Organizations</h3>
<p>
  These challenges lead to:
  <ul className="list-disc ml-6 space-y-2">
    <li>Longer investigation times for network issues</li>
    <li>Higher training costs for new analysts</li>
    <li>Increased risk of missing important security indicators</li>
    <li>Bottlenecks when only a few experts can effectively analyze packet data</li>
  </ul>
</p>

          </p>
          <h2>How Packet Raptor Helps</h2>
          <p>
            Packet Raptor makes network analysis more accessible by:
              <ul className="list-disc ml-6 space-y-2">
                <ol type="1">
                  <li>1. Providing a natural language interface - ask questions like "What types of traffic do you see?" or "Are there any suspicious connections?"</li>
                  <li>2. Organizing network data in an intelligent way that mimics how humans understand information</li>
                  <li>3. Offering initial insights that can guide where to focus your detailed analysis</li>
                  <li>4. Running entirely on your local machine, ensuring your network data stays private</li>
                </ol>
              </ul>
            Think of Packet Raptor as a helpful assistant that can give you a starting point in your analysis. It doesn't replace tools like Wireshark or human expertise - instead, it helps you begin making sense of your packet captures more quickly.
          </p>
          
        

        </section>

        <section className="mb-8">
          <h2>How It Works</h2>
          <p>
            Packet Raptor uses a unique approach called RAPTOR (Recursive Abstractive Processing for 
            Tree-Organized Retrieval). While traditional analysis tools look at network data as a flat sequence of packets, 
            RAPTOR organizes it in a tree structure. Think of RAPTOR like building a tree from the ground up:
          </p>
          
          <div className="bg-gray-200 p-6 rounded-lg my-4 space-y-4">
            <div>
              <h3 className="text-blue-400 font-semibold">1. Bottom Layer (Leaf Nodes):</h3>
              <p className="text-gray-300">Starts with the most specific details - individual packets, their IPs, protocols, and other raw data</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold">2. Middle Layers:</h3>
              <p className="text-gray-300">Groups related pieces of information together and creates summaries, like combining related network conversations</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold">3. Top Layer (Root):</h3>
              <p className="text-gray-300">Provides the highest-level view of what's happening in your network</p>
            </div>
          </div>
          
          <p className="mt-4">
            This structure allows Packet Raptor to understand both the fine details and the big picture 
            of your network traffic, just like an expert would.
          </p>
          <p>
            This structure is particularly powerful because:
            <ul className="list-disc ml-6 space-y-2">
              
              <li>It maintains context at every level, unlike traditional tools that might miss connections between different parts of the network traffic</li>
              <li>It allows for more intelligent answers to your questions by pulling information from the right level of detail</li>
            </ul>
          </p>
        </section>
        
  

        <section className="mb-8">
          <h2>Key Benefits</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Natural Interaction:</strong> Ask questions like "What kinds of traffic do you see?" 
              or "Is there anything suspicious happening?"
            </li>
            <li>
              <strong>Comprehensive Understanding:</strong> Get answers that consider both detailed and 
              high-level patterns in your data
            </li>
            <li>
              <strong>Privacy-Focused:</strong> All analysis happens locally on your machine, ensuring 
              your network data stays private
            </li>
            <li>
              <strong>Free and Open Source:</strong> Built with open-source tools and available for anyone to use
            </li>
          </ul>
          <h2>Real-World Applications</h2>
<ul className="list-disc ml-6 space-y-4">
  <li>
    <strong>Initial survey of network captures</strong>
    <p className="text-gray-600">
      Quickly understand what types of traffic are present and identify areas needing closer inspection
    </p>
  </li>
  <li>
    <strong>Quick understanding of protocol behavior</strong>
    <p className="text-gray-600">
      Learn how different protocols are interacting in your network without diving into technical specifications
    </p>
  </li>
  <li>
    <strong>Starting point for security investigations</strong>
    <p className="text-gray-600">
      Identify potential security issues that warrant deeper investigation with specialized tools
    </p>
  </li>
  <li>
    <strong>Training aid for learning about network protocols</strong>
    <p className="text-gray-600">
      Ask questions about protocol behavior to better understand how network communications work
    </p>
  </li>
  <li>
    <strong>Guide for focusing detailed analysis efforts</strong>
    <p className="mt-1 text-gray-600">
      Use initial insights to determine where to focus your detailed Wireshark analysis
    </p>
  </li>
</ul>
        </section>
        
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 my-6">
          <h3 className="text-blue-200 font-bold mb-2">Remember:</h3>
          <ul className="list-disc ml-6 text-black">
            <p>Packet Raptor is designed to lower the barrier to entry for packet analysis and speed up initial investigation, but it works best when combined with traditional tools and human expertise. It's your AI-powered assistant for starting packet analysis, not a replacement for thorough investigation.</p>
          </ul>
        </div>

        <NavButtons 
          next={{
            link: "/raptor/python",
            text: "Get Started with Installation"
          }}
          singleButtonPosition="right"
        />
      </div>
    </RaptorLayout>
  );
};

export default RaptorLanding;