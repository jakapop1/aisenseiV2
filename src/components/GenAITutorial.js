import React, { useState } from 'react';
import { ArrowRight, Lightbulb, Code, Shield, Brain } from 'lucide-react';

const GenAITutorial = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const overview = [
    {
      title: "What is Generative AI?",
      description: "Generative AI refers to artificial intelligence systems capable of creating new content based on training data. These systems can generate text, images, code, and other media by learning patterns and structures from existing examples.",
      steps: [
        "Learning: Models are trained on vast amounts of data to understand patterns",
        "Generation: Creates new content based on learned patterns and user prompts",
        "Iteration: Refines outputs based on feedback and constraints"
      ]
    }
  ];

  const types = [
    {
      title: "Types of Gen AI Models",
      steps: [
        "Large Language Models (LLMs) for text generation and understanding",
        "Diffusion Models for image and video creation",
        "Generative Adversarial Networks (GANs) for realistic content",
        "Transformer-based models for multi-modal generation"
      ]
    },
    {
      title: "Common Applications",
      steps: [
        "Content Creation: Articles, stories, marketing copy",
        "Visual Art: Images, designs, illustrations",
        "Code Generation: Programming assistance and automation",
        "Audio/Video: Music, voice synthesis, video editing"
      ]
    }
  ];

  const useCases = [
    {
      title: "Creative Tasks",
      icon: <Lightbulb className="w-6 h-6 mb-2" />,
      points: [
        "Content writing and editing",
        "Image and design creation",
        "Music and audio generation",
        "Interactive storytelling"
      ]
    },
    {
      title: "Technical Applications",
      icon: <Code className="w-6 h-6 mb-2" />,
      points: [
        "Code generation and debugging",
        "Data analysis and visualization",
        "Technical documentation",
        "API and system integration"
      ]
    },
    {
      title: "Business Solutions",
      icon: <Brain className="w-6 h-6 mb-2" />,
      points: [
        "Customer service automation",
        "Market analysis and reporting",
        "Product development assistance",
        "Process optimization"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Responsible Usage",
      icon: <Shield className="w-4 h-4 text-yellow-400 mt-1" />,
      points: [
        "Verify AI-generated content for accuracy",
        "Maintain transparency about AI usage",
        "Consider ethical implications",
        "Protect user privacy and data"
      ]
    },
    {
      title: "Performance Optimization",
      icon: <Shield className="w-4 h-4 text-yellow-400 mt-1" />,
      points: [
        "Craft clear and specific prompts",
        "Implement appropriate safety measures",
        "Monitor and evaluate outputs",
        "Iterate based on feedback"
      ]
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'types', label: 'Types & Apps' },
    { id: 'usecases', label: 'Use Cases' },
    { id: 'bestpractices', label: 'Best Practices' }
  ];

  return (
    <div className="site-background section-padding">
      <h1 className="heading-primary text-3xl mb-6">Understanding Generative AI</h1>
      
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

      {activeTab === 'types' && (
        <div className="space-y-8">
          {types.map((section, index) => (
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

export default GenAITutorial;