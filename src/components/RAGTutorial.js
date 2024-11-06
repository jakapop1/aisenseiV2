import React, { useState } from 'react';
import { ArrowRight, Database, Search, Settings, AlertTriangle } from 'lucide-react';

const RAGTutorial = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const overview = [
    {
      title: "What is RAG?",
      description: "Retrieval-Augmented Generation (RAG) is an AI framework that enhances language models by combining them with external knowledge retrieval. This allows for more accurate and verifiable responses based on specific data sources.",
      steps: [
        "Retrieval: System searches for relevant information in the knowledge base",
        "Augmentation: Retrieved information is processed and contextualized",
        "Generation: AI model creates responses using the retrieved context"
      ]
    }
  ];

  const components = [
    {
      title: "Core Components",
      steps: [
        "Vector Database: Stores and indexes document embeddings",
        "Embedding Model: Converts text to vector representations",
        "Retrieval System: Finds relevant information based on queries",
        "Language Model: Generates responses using retrieved context"
      ]
    },
    {
      title: "System Architecture",
      steps: [
        "Query Processing: Converting user input to searchable format",
        "Knowledge Retrieval: Finding relevant information",
        "Context Integration: Combining retrieved data with query",
        "Response Generation: Creating final output"
      ]
    }
  ];

  const useCases = [
    {
      title: "Knowledge Base",
      icon: <Database className="w-6 h-6 mb-2" />,
      points: [
        "Company documentation search",
        "Technical support systems",
        "Educational content delivery",
        "Research assistance"
      ]
    },
    {
      title: "Information Retrieval",
      icon: <Search className="w-6 h-6 mb-2" />,
      points: [
        "Question answering systems",
        "Document summarization",
        "Content recommendation",
        "Data analysis"
      ]
    },
    {
      title: "System Integration",
      icon: <Settings className="w-6 h-6 mb-2" />,
      points: [
        "API integration",
        "Custom knowledge bases",
        "Workflow automation",
        "Data processing pipelines"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Data Management",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />,
      points: [
        "Keep knowledge base up-to-date",
        "Optimize document chunking",
        "Implement efficient indexing",
        "Monitor retrieval quality"
      ]
    },
    {
      title: "System Optimization",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />,
      points: [
        "Fine-tune embedding models",
        "Optimize retrieval parameters",
        "Implement caching strategies",
        "Balance accuracy vs. speed"
      ]
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'components', label: 'Components' },
    { id: 'usecases', label: 'Use Cases' },
    { id: 'bestpractices', label: 'Best Practices' }
  ];

  return (
    <div className="site-background section-padding">
      <h1 className="heading-primary text-3xl mb-6">Understanding RAG Systems</h1>
      
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

      {activeTab === 'components' && (
        <div className="space-y-8">
          {components.map((section, index) => (
            <div key={index} className="module-card">
              <h2 className="card-title text-xl mb-4">{section.title}</h2>
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

export default RAGTutorial;