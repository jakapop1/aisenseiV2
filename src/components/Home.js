import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const LearningModulesPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [activeCategory, setActiveCategory] = useState('knowledge');
  const navigate = useNavigate();
  
  const modules = {
    knowledge: [
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
        title: "Effective Prompt Engineering for AI Models",
        description: "Master the art of crafting prompts to optimize interactions with Large Language Models (LLMs).",
        url: "/modules/prompt-engineering",
        overview: "This module provides essential techniques and best practices for prompt engineering, helping users achieve precise and accurate results from AI models.",
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
      },
      {
        title: "AI Model Types and Architectures",
        description: "Learn about different types of AI models and their ideal use cases.",
        url: "/modules/ai-models",
        overview: "Explore various AI model architectures, from traditional machine learning to modern neural networks, understanding when to use each type.",
        keyTopics: [
          "Traditional ML vs Deep Learning",
          "Types of neural networks (CNN, RNN, Transformers)",
          "Language models vs. multimodal models",
          "Model selection criteria",
          "Architecture trade-offs and considerations"
        ],
        learningObjectives: [
          "Differentiate between AI model types",
          "Understand model architecture strengths",
          "Select appropriate models for specific tasks",
          "Evaluate model performance characteristics"
        ]
      },
      {
        title: "AI Ethics and Responsible Development",
        description: "Understanding ethical considerations and best practices in AI development.",
        url: "/modules/ai-ethics",
        overview: "Explore the ethical implications of AI development and deployment, focusing on fairness, transparency, and responsible innovation.",
        keyTopics: [
          "AI bias and fairness",
          "Privacy considerations",
          "Transparency and explainability",
          "Environmental impact of AI",
          "Ethical guidelines and frameworks"
        ],
        learningObjectives: [
          "Identify potential ethical issues in AI",
          "Apply ethical principles to AI development",
          "Implement fair and transparent AI practices",
          "Balance innovation with responsibility"
        ]
      },
      {
        title: "RAG (Retrieval-Augmented Generation)",
        description: "Deep dive into combining retrieved knowledge with AI generation.",
        url: "/modules/rag",
        overview: "Master the principles and implementation of RAG systems, enabling more accurate and knowledge-grounded AI responses.",
        keyTopics: [
          "RAG architecture fundamentals",
          "Vector databases and embeddings",
          "Knowledge retrieval strategies",
          "Context window optimization",
          "Hybrid approaches and best practices"
        ],
        learningObjectives: [
          "Understand RAG system components",
          "Implement effective retrieval strategies",
          "Optimize knowledge integration",
          "Build robust RAG applications"
        ]
      },
      {
        title: "AI Security and Safety",
        description: "Understanding AI security risks and implementing safeguards.",
        url: "/modules/ai-security",
        overview: "Learn about potential security vulnerabilities in AI systems and how to implement proper safety measures and controls.",
        keyTopics: [
          "Prompt injection attacks",
          "Model vulnerabilities",
          "Data poisoning",
          "Security best practices",
          "Safety frameworks and guidelines"
        ],
        learningObjectives: [
          "Identify AI security risks",
          "Implement security controls",
          "Develop secure AI applications",
          "Monitor and maintain AI safety"
        ]
      }
    ],
    tools: [
      // Previous tools modules remain unchanged
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
        description: "Discover how to streamline document parsing using OpenWebUI's RAG pipeline for advanced querying.",
        url: "/modules/doc-parsing",
        overview: "This module explores how OpenWebUI's AI-driven platform enables easy and efficient document parsing. Users can upload multiple documents and leverage the RAG pipeline to get specific, context-rich answers.",
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
      }
    ]
  };

  const displayedModules = modules[activeCategory];

  return (
    <div className="site-background section-padding">
      {/* Navigation */}
      <nav className="mb-4 flex gap-4">
        <button 
          className={`nav-button-${activeCategory === 'knowledge' ? 'primary' : 'secondary'}`}
          onClick={() => setActiveCategory('knowledge')}
        >
          AI Knowledge
        </button>
        <button 
          className={`nav-button-${activeCategory === 'tools' ? 'primary' : 'secondary'}`}
          onClick={() => setActiveCategory('tools')}
        >
          AI Tools
        </button>
      </nav>

      {/* Header */}
      <h1 className="heading-primary">
        {activeCategory === 'knowledge' ? 'Knowledge Modules' : 'Tool Modules'}
      </h1>
      <p className="text-secondary content-margin">
        {activeCategory === 'knowledge' 
          ? 'Learn the fundamentals of AI and its applications'
          : 'Hands-on modules for specific AI tools and implementations'}
      </p>

      {/* Modules Grid */}
      <div className="modules-grid">
        {displayedModules.map((module, index) => (
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