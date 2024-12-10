import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Terminal, Link, Github, Cloud, Upload, X, ChevronDown, Send } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import GeneratingSummary from '../../components/shared/GeneratingSummary';

const PacketRaptor = () => {
  const [showFileBrowser, setShowFileBrowser] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModelSelect, setShowModelSelect] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [summaryComplete, setSummaryComplete] = useState(false);
  const [question, setQuestion] = useState('');
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (summaryComplete && inputRef.current) {
      inputRef.current.focus();
    }
  }, [summaryComplete]);
  
  const ollamaModels = [
    { id: 'llama2', name: 'Llama 2' },
    { id: 'llama2-uncensored', name: 'Llama 2 Uncensored' },
    { id: 'llama3.2:3b', name: 'Llama 3.2 (3B)' },
    { id: 'mistral', name: 'Mistral' },
    { id: 'dolphin-phi', name: 'Dolphin Phi' },
    { id: 'neural-chat', name: 'Neural Chat' },
    { id: 'stable-beluga', name: 'Stable Beluga' },
    { id: 'codellama', name: 'Code Llama' },
  ];

  const handleFileSelect = () => {
    setSelectedFile('icmp_in_l2tpv3.pcap');
    setShowFileBrowser(false);
    setShowModelSelect(true);
  };

  const handleModelSelect = (modelId) => {
    if (modelId === 'llama3.2:3b') {
      setSelectedModel(modelId);
    }
  };
  
  const handleFileRemove = () => {
    setSelectedFile(null);
    setShowModelSelect(false);
    setSelectedModel(null);
  };
  
  const features = [
    {
      title: "Key Features",
      items: [
        "Containerized deployment for easy setup",
        "Built-in AI models for packet analysis",
        "RESTful API for integration",
        "Support for multiple PCAP formats",
        "Real-time analysis capabilities"
      ]
    },
    {
      title: "Analysis Capabilities",
      items: [
        "Protocol analysis and classification",
        "Traffic pattern detection",
        "Anomaly identification",
        "Security threat detection",
        "Performance metrics calculation"
      ]
    }
  ];

  const installation = [
    {
      title: "Installation Steps",
      steps: [
        "git clone https://github.com/automateyournetwork/packet_raptor",
        "cd packet_raptor",
        "docker-compose build",
        "docker-compose up"
      ]
    }
  ];

  const usage = [
    {
      title: "Basic Usage",
      steps: [
        "Upload PCAP file through web interface",
        "Select analysis type (basic/advanced)",
        "Configure analysis parameters",
        "View and export results"
      ]
    }
  ];

  const FileBrowserModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-[600px] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Select PCAP File</h3>
          <button 
            onClick={() => setShowFileBrowser(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulated File Browser */}
        <div className="border border-gray-700 rounded-lg p-4">
          <div className="flex items-center space-x-4 mb-4">
            <button className="text-gray-400 hover:text-white">
              Desktop
            </button>
            <button className="text-gray-400 hover:text-white">
              Documents
            </button>
            <button className="text-gray-400 hover:text-white">
              Downloads
            </button>
          </div>

          {/* File List */}
          <div className="space-y-2">
            <div 
              onClick={handleFileSelect}
              className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded cursor-pointer"
            >
              <Terminal className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">icmp_in_l2tpv3.pcap</span>
            </div>
            {/* Disabled files */}
            <div className="flex items-center space-x-3 p-2 text-gray-500">
              <Terminal className="w-5 h-5" />
              <span>example_capture.pcap</span>
            </div>
            <div className="flex items-center space-x-3 p-2 text-gray-500">
              <Terminal className="w-5 h-5" />
              <span>network_traffic.pcap</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4 space-x-3">
          <button
            onClick={() => setShowFileBrowser(false)}
            className="px-4 py-2 text-gray-300 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
  
  const fullSummary = `Generated Summary: The provided packet dump is a capture of an IPv4 packet, specifically a UDP packet. Here's a breakdown of the key information:

Source IP Address: 10.216.100.210
Destination IP Address: 10.216.100.211
Protocol: UDP (User Datagram Protocol)
Port Number: 1701
The packet contains a UDP packet with the specified source and destination port numbers.

Additional Details:

The packet has a checksum of 0xc72c, which is calculated using the ip.checksum value.
The packet has a timestamp, indicating when it was captured. This information can be useful for analyzing network traffic over time.
There are also timestamps associated with the UDP payload (udp.time_relative) and with the packet itself (Timestamps).

Generated Summary: This appears to be a network packet capture in JSON format, likely from a tool like Wireshark. Here's a breakdown of the packet:

Ethernet Frame:
- src: 00:50:56:a5:64:4d (source MAC address)
- dst: 00:03:00:00:00:00:0f:a0:00:00:00:00:52:5a:62:98:6b:49:72:96:3f:52:26:ac:08:00:45:00:00:54:7c:ec:40:00:40:01:a7:66:0a:2a:01:02:0a:2a:01:01:08:00:d6:95:1e:b8:00:24:b7:f7:3e:55:00:00:00:00:41:6e:0c:00:00:00:00:00:10:11:12:13:14:15:16:17:18:19:1a:1b:1c:1d:1e:1f:20:21:22:23:24:25:26:27:28:29:2a:2b:2c:2d:2e:2f:30:31:32:33:34:35:36:37 (destination MAC address)
- type: 0x0800 (Ethertype for IPv4)

IP Header:
- version: 4 (IPv4)
- hdr_len: 20 (header length in bytes)
- dsfield: 0x00 (DSCP - Differentiated Services Field)
- id: 0xdab5 (source IP ID)
- flags: 0x00 (no flags set)
- ttl: 64 (time to live)
- proto: 17 (UDP)

UDP Header:
- srcport: 1701 (source port number)
- dstport: 1701 (destination port number)
- length: 118 (payload length in bytes)
- checksum: 0xc058 (UDP checksum)

L2TP Header:
- flags: 0x0003 (L2TP flags, indicating a Pseudo-Wire)
- sid: 0x00000fa0 (session identifier)
- pseudowire_type: 0 (Pseudo-Wire Type)

Data Payload:
- data.data: a binary string containing the payload of the packet

This packet appears to be a UDP packet with an L2TP payload, sent from source IP address 10.216.100.210 to destination IP address 10.216.100.211 on port 1701.

Keep in mind that this is just a partial capture of the packet, as it may have been truncated or incomplete for some reason.

Generated Summary: This is a JSON payload from an IP packet, broken down into its constituent parts. Here's a brief explanation of each section:

Ethernet Frame:
- src: The source MAC address of the frame (00:50:56:a5:64:4d)
- dst: The destination MAC address of the frame (20566)
- ether_type: The Ethernet frame type (0x0800)

IP Packet:
- version: The IP version (4)
- hdr_len: The length of the IP header (20 bytes)
- dsfield: The Differentiated Services field (0x00)
- id: The ID field (0xd4d2)
- flags: The flags field (0x00)
- ttl: The Time To Live field (64)
- proto: The protocol field (17, indicating TCP)
- checksum: The checksum field (0xc63b)

TCP Segment:
- srcport: The source port number (1701)
- dstport: The destination port number (1701)
- seq: The sequence number (not present in this packet)
- ack: The acknowledgement number (not present in this packet)
- data: The data payload (...)

L2TP Session:
- flags: The L2TP flags field (0x0003)
- sid: The session ID (0x00000fa0)
- pseudowire_type: The pseudowire type field (0)

Data Payload:
- data: The data payload (binary content)

Note that this packet appears to be a TCP segment with a L2TP session established on top of it, and the data payload is a series of bytes.

Generated Summary: This is a packet capture file in the Network Packet Capture (NPCap) format. It contains data from an Ethernet frame with an IP and UDP payload, as well as some additional metadata.

Here's a breakdown of the contents:

Ethernet Frame:
- Destination MAC address: 00:50:56:9a:78:c7
- Source MAC address: 00:50:56:a5:64:4d
- Protocol type: 0x0800 (IPv4)
- Stream ID: 0

IP Header:
- Version: 4
- Header length: 20
- DS field: 0x00 (default value)
- DF flag: 0 (not set)
- MF flag: 0 (not set)
- Fragment offset: 0
- TTL: 64
- Protocol number: 17 (UDP)
- Checksum: 0xbb3e

UDP Header:
- Source port: 1701
- Destination port: 1701
- Length: 62
- Checksum: 0x0000

L2TP Payload:
- Flags: 0x0003 (special value)
- Reserved: 0
- Sequence number: 0
- Version: 3
- Session ID: 0x00000fa0

Data Payload:
Data: 00:00:00:00:52:5a:62:98:6b:49:72:96:3f:52:26:ac:08:06:00:01:08:00:06:04:00:02:72:96:3f:52:26:ac:0a:2a:01:02:52:5a:62:98:6b:49:0a:2a:01:01

This payload appears to be a fragmented L2TP payload, which is being transmitted over UDP. The l2tp.res field indicates that the session is complete, and the l2tp.sid field contains the session ID.

The data payload itself seems to be some sort of binary data, but without more context, it's difficult to determine its meaning or purpose.

Generated Summary: The provided text represents a capture of an Ethernet frame, including its timestamp and various protocol details.

Frame Information:
- Timestamp: The first frame was captured on April 27, 2015, at 16:59:44 UTC (HST), while the second frame was captured on April 28, 2015, at 03:00:00 UTC (HST).
- Frame Number and Length: Both frames have a number of 15 and a length of 60 bytes.
- Encapsulation Type: The frames are encapsulated using Ethernet type 1.

Ethernet Protocol Details:
- Destination MAC Address: 00:50:56:9a:78:c7
  Resolved to: VMware, Inc.
- Source MAC Address: 00:50:56:a5:64:4d
  Resolved to: VMware, Inc.
- Type and Padding: Both frames have a type of 0x0806 (ARP) with no padding.
- Streams and Offset: There is no stream or offset mentioned in the provided data.

ARP Protocol Details:
- Hardware Type and Size: ARP protocol uses a hardware size of 6 bytes.
- Protocol Type and Size: ARP protocol uses a protocol size of 4 bytes.
- Operation Code: The first frame has an operation code of 2, while the second frame has an operation code of 1.
- Source MAC Address and Proto-IPv4 Address: Both frames have the same source MAC address (00:50:56:a5:64:4d) and proto-IPv4 address (10.216.100.210).
- Destination MAC Address and Proto-IPv4 Address: The first frame has a destination MAC address of 00:50:56:9a:78:c7, while the second frame has a destination MAC address of 00:00:00:00:00:00.

Overall, these frames appear to be ARP requests sent from one machine (10.216.100.210) to another machine (10.216.100.211).`;

  const handleProceedClick = () => {
    setShowSummary(true);
  };

  return (
  <div className="min-h-screen bg-[#121212] rounded-lg p-8" style={{ color: 'white' }}>
    <div className="max-w-4xl mx-auto mt-12 space-y-6">
      <h1 style={{ color: 'white', fontSize: '50px', lineHeight: '1.3' }}>  
        Packet Raptor - Chat with Packet Captures as a Tree  
      </h1>  
      
      <div className="space-y-4">
        <p style={{ color: 'white', fontSize: '20px', lineHeight: '0.5' }}>Choose a PCAP file</p>
        
        <div className="bg-[#1E1E1E] rounded-lg p-6">
          {!selectedFile ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Cloud className="w-8 h-8 text-gray-400" />
                <div className="flex flex-col">
                  <span className="text-white-300" style={{ fontSize: '20px' }}>  Drag and drop file here  
                  </span>  
                  <span className="text-gray-500">Limit 200MB per file · PCAP</span>
                </div>
              </div>
              <button
                onClick={() => setShowFileBrowser(true)}
                className="px-4 py-2 bg-transparent text-[#E86666] border border-[#E86666] rounded hover:bg-[#E86666]/10 transition-colors"
              >
                Browse files
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Terminal className="w-6 h-6 text-gray-400" />
                <span className="text-gray-300">{selectedFile}</span>
                <span className="text-gray-500 text-sm">1.0MB</span>
              </div>
              <button
                onClick={handleFileRemove}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Success Message and Model Selection */}
      {selectedFile && (
        <div className="space-y-6">
          {/* Success Message */}
          <div className="bg-[#1B2E1B] text-[#4CAF50] rounded-lg px-4 flex items-center">
            <p style={{ color: 'white', fontSize: '20px'}}>PCAP file uploaded and converted to JSON.</p>
          </div>

          {/* Model Selection */}
          <div className="space-y-4">
            <p style={{ color: 'white', fontSize: '20px', lineHeight: '0.5' }}>Select Model</p>
            <div className="relative">
              <button
                onClick={() => setShowModelSelect(!showModelSelect)}
                className="w-full flex items-center justify-between bg-[#1E1E1E] text-gray-300 p-4 rounded-lg"
              >
                <span>{selectedModel ? ollamaModels.find(m => m.id === selectedModel)?.name : 'Select a model'}</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              
              {/* Dropdown Menu */}
              {showModelSelect && (
                <div className="absolute w-full mt-2 bg-[#1E1E1E] rounded-lg shadow-lg z-10">
                  {ollamaModels.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => {
                        handleModelSelect(model.id);
                        setShowModelSelect(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-[#2E2E2E] ${
                        model.id !== 'llama3.2:3b' ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300'
                      }`}
                      disabled={model.id !== 'llama3.2:3b'}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Proceed Button */}
            <button
              onClick={() => setShowSummary(true)}
              className={`w-auto px-6 py-2 rounded-lg ${
                selectedModel 
                  ? 'bg-[#1E1E1E] hover:bg-[#2E2E2E] text-white' 
                  : 'bg-[#1E1E1E] text-gray-500 cursor-not-allowed'
              }`}
              disabled={!selectedModel}
            >
              Proceed to Chat
            </button>
          </div>
        </div>
      )}
        
        {showSummary && (
          <div className="mt-6">
            <GeneratingSummary 
              text={fullSummary}
              onComplete={() => setSummaryComplete(true)}
            />
          </div>
        )}
        
        {summaryComplete && (
          <div className="space-y-4">
            <div className="module-card">
              <h3 style={{ color: 'white'}}>Ask a question about the PCAP data:</h3>
              <div className="flex space-x-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. What is the source IP address?"
                  className="flex-1 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && question.trim()) {
                      // Handle question submission
                      console.log('Question submitted:', question);
                      setQuestion('');
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (question.trim()) {
                      // Handle question submission
                      console.log('Question submitted:', question);
                      setQuestion('');
                    }
                  }}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                    question.trim() 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!question.trim()}
                >
                  <span>Ask</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* File Browser Modal */}
{showFileBrowser && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-[#2D2D2D] rounded-lg w-[700px] overflow-hidden shadow-xl">
      {/* Header with traffic lights */}
      <div className="bg-[#3A3A3A] px-4 py-2 flex items-center justify-between border-b border-[#494949]">
        <div className="flex items-center space-x-2">
          
          <h3 style={{ color: 'white'}}>Select PCAP File</h3>
        </div>
      </div>

      <div className="p-4">
        {/* Navigation buttons */}
        <div className="flex items-center space-x-4 mb-4">
          <button className="text-gray-400 hover:text-gray-200 text-sm px-3 py-1 rounded hover:bg-[#494949]">
            Desktop
          </button>
          <button className="text-gray-400 hover:text-gray-200 text-sm px-3 py-1 rounded hover:bg-[#494949]">
            Documents
          </button>
          <button className="text-gray-400 hover:text-gray-200 text-sm px-3 py-1 rounded hover:bg-[#494949]">
            Downloads
          </button>
        </div>

        {/* File list */}
        <div className="border border-[#494949] rounded-lg p-4 bg-[#2D2D2D]">
          <div className="space-y-2">
            <div 
              onClick={handleFileSelect}
              className="flex items-center space-x-3 p-2 hover:bg-[#494949] rounded cursor-pointer group"
            >
              <Terminal className="w-5 h-5 text-blue-400" />
              <div>
                <span className="text-gray-300 group-hover:text-white">icmp_in_l2tpv3.pcap</span>
                <span className="block text-xs text-gray-500">1.0 MB</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-2 opacity-50">
              <Terminal className="w-5 h-5 text-gray-400" />
              <div>
                <span className="text-gray-500">example_capture.pcap</span>
                <span className="block text-xs text-gray-600">2.3 MB</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-2 opacity-50">
              <Terminal className="w-5 h-5 text-gray-400" />
              <div>
                <span className="text-gray-500">network_traffic.pcap</span>
                <span className="block text-xs text-gray-600">5.7 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#2D2D2D] px-4 py-3 border-t border-[#494949] flex justify-end space-x-2">
        <button
          onClick={() => setShowFileBrowser(false)}
          className="px-4 py-1.5 text-sm text-gray-300 hover:text-white rounded-md bg-[#494949] hover:bg-[#5A5A5A]"
        >
          Cancel
        </button>
        <button
          className="px-4 py-1.5 text-sm text-gray-400 rounded-md bg-[#494949] cursor-not-allowed"
          disabled
        >
          Upload
        </button>
      </div>
    </div>
  </div>
)}
        
      </div>

    </div>
  );
};

export default PacketRaptor;