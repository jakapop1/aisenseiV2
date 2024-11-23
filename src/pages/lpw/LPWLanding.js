import React from 'react';
import { Link } from 'react-router-dom';

const LPWLanding = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-gray-200 p-6 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-secondary mb-6">Local Packet Whisperer (LPW) for packet analysis</h2>
        
        <div className="mb-6">
          <Link to="/lpw/introduction" className="text-textColor hover:text-primary">
            Introduction to LPW
          </Link>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-secondary mb-4">LPW Setup</h3>
          <ul className="space-y-2 ml-4">
            <li>
              <Link to="/lpw/python-wireshark" className="text-textColor hover:text-primary">
                Installing Python and Wireshark
              </Link>
            </li>
            <li>
              <Link to="/lpw/ollama" className="text-textColor hover:text-primary">
                Installing Ollama
              </Link>
            </li>
            <li>
              <Link to="/lpw/venv" className="text-textColor hover:text-primary">
                Setting Up Virtual Environment
              </Link>
            </li>
            <li>
              <Link to="/lpw/interface" className="text-textColor hover:text-primary">
                Setting Up LPW interface
              </Link>
            </li>
            <li>
              <Link to="/lpw/settings" className="text-textColor hover:text-primary">
                Setting Up LPW settings
              </Link>
            </li>
            <li>
              <Link to="/lpw/using" className="text-textColor hover:text-primary">
                Using LPW
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">LPW Exercises</h3>
          <ul className="space-y-2 ml-4">
            <li>
              <Link to="/lpw/prompt-engineering" className="text-textColor hover:text-primary">
                Prompt Engineering and Models
              </Link>
            </li>
            <li>
              <Link to="/lpw/basic-analysis" className="text-textColor hover:text-primary">
                Basic Analysis Exercises
              </Link>
            </li>
            <li>
              <Link to="/lpw/advanced-analysis" className="text-textColor hover:text-primary">
                Advanced Analysis Exercises
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-secondary mb-6">Guide to using Local Packet Whisperer (LPW)</h1>
        
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Introduction</h2>
          <p className="mb-6">
            In this module, we will explore the transformative potential of Large Language Models (LLMs) 
            in streamlining packet capture (PCAP) analysis. Traditional PCAP analysis can be a 
            time-consuming and demanding process, especially as data volumes continue to grow. It often 
            requires the creation and application of precise filters and extensive manual effort to 
            identify relevant information and potential anomalies. However, by leveraging the power of 
            LLMs, we can revolutionize this process, making it more efficient, accessible, and insightful 
            for cyber analysts at all skill levels.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4">The Power of LLMs in PCAP Analysis</h2>
          <p className="mb-6">
            LLMs, with their ability to understand and generate human-like text, offer a unique 
            opportunity to enhance PCAP analysis. These models can efficiently scan and interpret large 
            datasets, rapidly identifying patterns, connections, and potential anomalies that may be 
            overlooked in manual analysis. By automating the initial analysis process, LLMs can 
            significantly reduce the time and effort required to sift through vast amounts of packet data.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4">Benefits for Cyber Analysts</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <strong>Efficiency:</strong> Automates initial analysis process, enabling quick identification 
              of relevant information and potential threats.
            </li>
            <li className="mb-2">
              <strong>Accessibility:</strong> Natural language interface makes PCAP analysis more 
              accessible to analysts at all skill levels.
            </li>
            <li className="mb-2">
              <strong>Local Control:</strong> Run entirely locally to ensure data privacy and security.
            </li>
            <li className="mb-2">
              <strong>Customization:</strong> Integration with Ollama allows selection and customization 
              of LLMs to suit specific needs.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default LPWLanding;