import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Brain, Target, Shield, Wrench } from 'lucide-react';

const PromptEngineeringTutorial = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const overview = [
    {
      title: "What is Prompt Engineering?",
      description: "Prompt engineering is the practice of designing and optimizing inputs to AI language models to achieve desired outputs. It combines understanding of model behavior, clear communication, and systematic testing to create reliable and effective prompts.",
      steps: [
        "Input Design: Crafting clear, specific instructions",
        "Context Setting: Providing relevant background information",
        "Output Formatting: Specifying desired response structure",
        "Iteration: Testing and refining prompts for better results"
      ]
    }
  ];

  const components = [
    {
      title: "Key Elements",
      steps: [
        "Clear Instructions: Explicit, unambiguous directions",
        "Context: Relevant background information",
        "Examples: Demonstrations of desired outputs",
        "Constraints: Boundaries and limitations",
        "Format Specification: Desired output structure"
      ]
    },
    {
      title: "Prompt Structure",
      steps: [
        "Role Definition: Setting model behavior",
        "Context Setting: Background information",
        "Task Description: Specific instructions",
        "Output Format: Response structure",
        "Additional Parameters: Constraints and preferences"
      ]
    }
  ];

  const techniques = [
    {
      title: "Basic Techniques",
      icon: <MessageSquare className="w-6 h-6 mb-2" />,
      points: [
        "Zero-shot prompting",
        "Few-shot learning",
        "Chain-of-thought reasoning",
        "Step-by-step instructions"
      ]
    },
    {
      title: "Advanced Strategies",
      icon: <Brain className="w-6 h-6 mb-2" />,
      points: [
        "System message optimization",
        "Role-based prompting",
        "Template creation",
        "Output parsing strategies"
      ]
    },
    {
      title: "Quality Control",
      icon: <Target className="w-6 h-6 mb-2" />,
      points: [
        "Response validation",
        "Error handling",
        "Consistency checks",
        "Output verification"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Writing Effective Prompts",
      icon: <Wrench className="w-4 h-4 text-blue-400 mt-1" />,
      points: [
        "Be specific and explicit",
        "Break complex tasks into steps",
        "Include relevant examples",
        "Specify output format clearly"
      ]
    },
    {
      title: "Safety & Ethics",
      icon: <Shield className="w-4 h-4 text-blue-400 mt-1" />,
      points: [
        "Consider potential biases",
        "Implement content filtering",
        "Respect privacy guidelines",
        "Test edge cases"
      ]
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'components', label: 'Components' },
    { id: 'techniques', label: 'Techniques' },
    { id: 'bestpractices', label: 'Best Practices' }
  ];

  return (
    <div className="site-background section-padding">
      <h1 className="heading-primary text-3xl mb-6">Mastering Prompt Engineering</h1>
      
      <div className="flex space-x-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? 'nav-button-primary' : 'nav-button-secondary'} px-4 py-2 rounded-lg`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-8">
          {overview.map((section, index) => (
            <div key={index} className="module-card p-6 rounded-lg bg-gray-800">
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
            <div key={index} className="module-card p-6 rounded-lg bg-gray-800">
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

      {activeTab === 'techniques' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <div key={index} className="module-card p-6 rounded-lg bg-gray-800">
              <div className="flex flex-col items-center mb-4">
                {technique.icon}
                <h3 className="card-title text-xl">{technique.title}</h3>
              </div>
              <ul className="space-y-2">
                {technique.points.map((point, pointIndex) => (
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
            <div key={index} className="module-card p-6 rounded-lg bg-gray-800">
              <div className="flex items-start space-x-2">
                {section.icon}
                <div>
                  <h3 className="card-title text-xl mb-2">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
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

export default PromptEngineeringTutorial;