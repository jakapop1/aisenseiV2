import React, { useState } from 'react';
import { ArrowRight, Terminal, Shield, Network, BookOpen, Check, AlertTriangle } from 'lucide-react';

const PcapTutorial = () => {
  const [activeTab, setActiveTab] = useState('installation');

  const installationSteps = [
    {
      title: "Install Prerequisites",
      steps: [
        "Install Wireshark or tshark",
        "Download and install Ollama from ollama.ai",
        "Ensure Python 3.7+ is installed"
      ]
    },
    {
      title: "Install Local Packet Whisperer",
      steps: [
        "Run: pip install lpw",
        "Pull LLM: ollama pull dolphin-mistral:latest",
        "Start: lpw start"
      ]
    },
    /*{
      title: "Install Packet Buddy",
      steps: [
        "Clone: git clone https://github.com/automateyournetwork/packet_buddy",
        "Navigate: cd packet_buddy",
        "Start: docker-compose up"
      ]
    }*/
  ];

  const useCases = [
    {
      title: "Security Analysis",
      icon: <Shield className="w-6 h-6 mb-2" />,
      points: [
        "Threat detection in network traffic",
        "Identifying suspicious patterns",
        "Analyzing security breaches",
        "Investigation of anomalies"
      ]
    },
    {
      title: "Network Troubleshooting",
      icon: <Network className="w-6 h-6 mb-2" />,
      points: [
        "Debug connectivity issues",
        "Analyze protocol behavior",
        "Investigate performance",
        "Validate configurations"
      ]
    },
    {
      title: "Training & Education",
      icon: <BookOpen className="w-6 h-6 mb-2" />,
      points: [
        "Learn network protocols",
        "Understand packet structures",
        "Train security analysts",
        "Document network behavior"
      ]
    }
  ];

  const tools = [
    {
      name: "Local Packet Whisperer",
      description: "Privacy-focused PCAP analysis using local LLMs",
      benefits: [
        "100% local processing",
        "Multiple LLM support",
        "Interactive interface",
        "Protocol-specific analysis"
      ]
    },
    {
      name: "Packet Buddy",
      description: "Containerized solution for small PCAP analysis",
      benefits: [
        "Easy deployment",
        "Open source models",
        "Quick analysis",
        "Community support"
      ]
    }
  ];

  const tabs = [
    { id: 'installation', label: 'Installation' },
    { id: 'usecases', label: 'Use Cases' },
    { id: 'tools', label: 'Tools' }
  ];

  return (
    <div className="site-background section-padding">
      <h1 className="heading-primary text-3xl mb-6">PCAP Analysis Tools Tutorial</h1>
      
      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'nav-button-primary' : 'nav-button-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Installation Guide */}
      {activeTab === 'installation' && (
        <div className="space-y-8">
          {installationSteps.map((section, index) => (
            <div key={index} className="module-card">
              <h2 className="card-title text-xl mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Use Cases */}
      {activeTab === 'usecases' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="module-card">
              <div className="flex flex-col items-center mb-4">
                {useCase.icon}
                <h3 className="card-title text-xl">{useCase.title}</h3>
              </div>
              <ul className="space-y-2">
                {useCase.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Tools Comparison */}
      {activeTab === 'tools' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="module-card">
              <h3 className="card-title text-xl mb-2">{tool.name}</h3>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <div className="space-y-2">
                {tool.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Best Practices */}
          <div className="md:col-span-2 module-card">
            <h3 className="card-title text-xl mb-4">Best Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Data Preparation</span>
                    <p className="text-gray-300 text-sm">Filter PCAP files to relevant traffic and use appropriate capture filters</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Model Selection</span>
                    <p className="text-gray-300 text-sm">Test different LLM models and choose based on your specific use case</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PcapTutorial;