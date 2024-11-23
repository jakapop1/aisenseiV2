import React, { useState } from 'react';
import { ArrowRight, Terminal, BookOpen, Check, AlertTriangle } from 'lucide-react';

const DocumentParsingTutorial = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const overview = [
    {
      title: "What is RAG?",
      description: "Retrieval-Augmented Generation (RAG) is an AI method that helps answer questions using relevant documents uploaded by the user. RAG combines 'retrieval' of relevant information from documents with 'generation' of an answer based on the retrieved content.",
      steps: [
        "Retrieval: Finds the most relevant files or sections in your document collection based on your question.",
        "Generation: Summarizes and provides an answer based on the content retrieved."
      ]
    }
  ];

  const setupSteps = [
    {
      title: "Install OpenWebUI",
      steps: [
        "Download OpenWebUI from openwebui.ai and follow the installation steps",
        "Configure document compatibility for handling PDFs, Word docs, and other formats"
      ]
    },
    {
      title: "Setting Up the RAG Pipeline",
      steps: [
        "Enable the RAG feature in OpenWebUI",
        "Upload documents to create a searchable library",
        "Activate the pipeline for document retrieval and querying"
      ]
    }
  ];

  const useCases = [
    {
      title: "Document Management",
      icon: <BookOpen className="w-6 h-6 mb-2" />,
      points: [
        "Upload and organize multiple document formats",
        "Create categories for easy retrieval",
        "Easily manage large document collections"
      ]
    },
    {
      title: "Multi-Document Querying",
      icon: <BookOpen className="w-6 h-6 mb-2" />,
      points: [
        "Ask questions that span multiple documents",
        "Get specific answers without manually searching",
        "Optimize query results by refining keywords"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Data Preparation",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />,
      points: [
        "Filter documents for relevance to speed up response times",
        "Organize files by topic for more accurate querying"
      ]
    },
    {
      title: "Optimizing Responses",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />,
      points: [
        "Test different query formats to improve response accuracy",
        "Use keywords for better document matching"
      ]
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'setup', label: 'Setup' },
    { id: 'usecases', label: 'Use Cases' },
    { id: 'bestpractices', label: 'Best Practices' }
  ];

  return (
    <div className="site-background section-padding">
      <h1 className="heading-primary text-3xl mb-6">Effortless Document Parsing with AI</h1>
      
      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? 'nav-button-primary' : 'nav-button-secondary'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {overview.map((section, index) => (
            <div key={index} className="module-card">
              <h2 className="card-title text-xl mb-4">{section.title}</h2>
              <p className="text-gray-300 mb-4">{section.description}</p>
              <div className="space-y-3">
                {section.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Setup Guide */}
      {activeTab === 'setup' && (
        <div className="space-y-8">
          {setupSteps.map((section, index) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Best Practices */}
      {activeTab === 'bestpractices' && (
        <div className="space-y-8">
          {bestPractices.map((section, index) => (
            <div key={index} className="module-card">
              <div className="flex items-start space-x-2">
                {section.icon}
                <div>
                  <h3 className="card-title text-xl mb-2">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentParsingTutorial;
