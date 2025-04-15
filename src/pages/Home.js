import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="px-8 py-6 max-w-[1200px] mx-auto">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-secondary mb-8 my-10">Welcome to AI Sensei</h1>
        <p className="text-lg text-textColor leading-relaxed mb-8 max-w-3xl mx-auto px-4 py-2">
          Enhance your cybersecurity skills with our cutting-edge courses that
          combine artificial intelligence with security analysis. Learn how to
          leverage AI tools for more efficient and effective security operations.
        </p>
      </section>

      {/* Changed grid classes to display 3 columns on medium screens and above */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
        {[
          {
            title: "LPW for Packet Analysis",
            link: "/lpw",
            items: [
              "Enhance packet analysis with local LLM processing",
              "Learn model selection and configuration",
              "Develop effective prompt engineering strategies",
              "Automate common analysis tasks",
              "Work with offline analysis capabilities",
              "Create reproducible analysis workflows"
            ]
          },
          {
            title: "Packet Raptor for Analysis",
            link: "/raptor",
            items: [
              "Enhance packet analysis with local LLM processing",
              "Learn tree structure data organization",
              "Utilize efficient packet searching techniques",
              "Automate common analysis tasks",
              "Work with offline analysis capabilities",
              "Navigate hierarchical packet structures"
            ]
          },
          {
            title: "CTI with OpenWebUI",
            link: "/cti",
            items: [
              "Streamline threat intelligence gathering",
              "Integration with MITRE ATT&CK Framework",
              "Enhanced report generation",
              "Understand RAG applications",
              "Learn pipelining for task automation"
            ]
          },
          {
            title: "G3PO: AI-Assisted Reverse Engineering",
            link: "/g3po",
            items: [
              "Integrate G3PO with Ghidra for enhanced code analysis",
              "Utilize local Ollama models to interpret and explain decompiled functions",
              "Automate function vulnerability identification",
              "Streamline reverse-engineering workflows with AI assistance",
              "Enhance understanding of complex code structures",
              "Develop proficiency in combining Ghidra with advanced AI models"
            ]
          },
          {
            title: "Garak: Open-Source LLM Vulnerability Scanner",
            link: "/garak",
            items: [
              "Install Garak to check for vulnerabilities in your LLM",
              "Run scans to test for XSS, prompt manipulation, and more",
            ]
          },
          {
            title: "CSLA for Agentic Automation",
            link: "/agents",
            items: [
              "Leverage LLM agents to automate cybersecurity workflows",
              "Orchestrate multi-agent collaboration using AutoGen and LangChain",
              "Interact with red team environments using MITRE Caldera",
              "Automate tasks like privilege detection, MITRE technique extraction, and adversary profiling",
              "Customize actions for repeatable, modular workflows"
            ]
          }
        ].map((course, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md hover:transform hover:-translate-y-2 hover:shadow-lg 
                       transition-all duration-300 flex flex-col p-6"
          >
            <h3 className="text-xl font-semibold text-secondary mb-4 pb-2 border-b-2 border-primary-hover text-center">
              {course.title}
            </h3>
            <ul className="space-y-3 flex-grow mb-4 !list-none">
              {course.items.map((item, itemIndex) => (
                <li key={itemIndex} className="pl-5 relative text-base break-words">
                  <span className="absolute left-0 text-primary">→</span>
                  <span className="inline-block">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to={course.link}
              className="block w-full py-2 px-4 bg-primary text-white text-sm text-center rounded-md
                       hover:bg-secondary transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
