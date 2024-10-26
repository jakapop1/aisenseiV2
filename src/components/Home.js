import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const LearningModulesPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const navigate = useNavigate();
  
  const modules = [
    { 
      title: "What is Gen AI?",
      description: "A brief lesson going over gen AI",
      url: "/modules/gen-ai",
      overview: "Generative AI is revolutionizing how we create and process content. This module explores the fundamentals and applications of Gen AI.",
      keyTopics: [
        "Understanding the basics of Generative AI",
        "Different types of Gen AI models",
        "Real-world applications of Gen AI",
        "Limitations and considerations",
        "Future developments in Gen AI"
      ],
      learningObjectives: [
        "Understand core Gen AI concepts",
        "Learn about different Gen AI architectures",
        "Identify suitable use cases for Gen AI",
        "Evaluate Gen AI outputs effectively"
      ]
    },
    {
      title: "AI 4 CTI",
      description: "A module to learn how to use AI with CTI",
      url: "/modules/cti",
      overview: "Artificial Intelligence (AI) is becoming a vital tool in Cyber Threat Intelligence (CTI). This module explores how AI can enhance your CTI capabilities and workflow.",
      keyTopics: [
        "Understanding AI's role in threat detection",
        "Machine Learning for pattern recognition in threat data",
        "Automated threat intelligence gathering",
        "AI-powered threat analysis and correlation",
        "Integration of AI tools in CTI workflows"
      ],
      learningObjectives: [
        "Understand how AI can enhance CTI processes",
        "Learn to leverage AI tools for threat analysis",
        "Develop skills in AI-assisted threat hunting",
        "Master AI-powered threat intelligence gathering"
      ]
    },
    { 
      title: "AI for PCAP Analysis",
      description: "Learn how to leverage AI and RAG models for packet analysis with tools like Packet Buddy and LPW.",
      url: "/modules/pcap",
      overview: "Explore how AI-driven tools can simplify and enhance PCAP analysis, using local models and open-source frameworks for interactive packet investigation.",
      keyTopics: [
        "Setting up Packet Buddy and LPW",
        "Using RAG models for packet insights",
        "AI-enhanced PCAP file handling and filtering",
        "Integrating models with PCAP tools for query-based insights",
        "Privacy-focused, local PCAP processing options"
      ],
      learningObjectives: [
        "Learn to set up AI tools for PCAP analysis",
        "Use RAG models in packet investigation",
        "Develop workflows for interactive, AI-assisted packet analysis",
        "Identify the best models and methods for different PCAP sizes"
      ]
    },
    { 
      title: "Effortless Document Parsing with AI",
      description: "Discover how to streamline document parsing using OpenWebUI’s RAG pipeline for advanced querying.",
      url: "/modules/doc-parsing",
      overview: "This module explores how OpenWebUI’s AI-driven platform enables easy and efficient document parsing. Users can upload multiple documents and leverage the RAG pipeline to get specific, context-rich answers.",
      keyTopics: [
        "Introduction to document parsing with AI",
        "Using OpenWebUI for document management",
        "Setting up the RAG pipeline for document retrieval",
        "Optimizing AI responses for multi-document querying",
        "Handling various document types (PDFs, Word docs, etc.)"
      ],
      learningObjectives: [
        "Set up OpenWebUI for document parsing",
        "Understand the RAG pipeline workflow for document retrieval",
        "Develop skills to query multiple documents with AI",
        "Identify best practices for efficient document management and analysis"
      ]
    },
    {
      title: "Effective Prompt Engineering for AI Models",
      description: "Master the art of crafting prompts to optimize interactions with Large Language Models (LLMs).",
      url: "/modules/prompt-engineering",
      overview: "This module provides essential techniques and best practices for prompt engineering, helping users achieve precise and accurate results from AI models. Learn how to tailor questions, control tone, specify details, and avoid common pitfalls.",
      keyTopics: [
        "Fundamentals of prompt engineering",
        "Types of prompts: open-ended vs. closed-ended",
        "Strategies for contextual prompting",
        "Prompt structure for optimal model responses",
        "Debugging and refining prompts"
      ],
      learningObjectives: [
        "Understand the principles of effective prompting",
        "Craft prompts for different use cases",
        "Learn to troubleshoot and refine prompts",
        "Achieve desired outcomes through structured prompts"
      ]
    }
    
  ];

  return (
    <div className="site-background section-padding">
      {/* Navigation */}
      <nav className="mb-4">
        <button className="nav-button-primary">
          Learning Paths
        </button>
        <button className="nav-button-secondary">
          Modules
        </button>
      </nav>

      {/* Header */}
      <h1 className="heading-primary">Individual Modules</h1>
      <p className="text-secondary content-margin">Modules are small labs for specific needs!</p>

      {/* Modules Grid */}
      <div className="modules-grid">
        {modules.map((module, index) => (
          <div key={index} className="module-card">
            <div className="text-left">
              <h2 className="card-title">{module.title}</h2>
              <p className="card-description">{module.description}</p>
            </div>
            <div className="text-left">
              <button 
                onClick={() => setSelectedModule(module)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Go!
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={selectedModule !== null}
        onClose={() => setSelectedModule(null)}
        module={selectedModule}
      />
    </div>
  );
};

export default LearningModulesPage;