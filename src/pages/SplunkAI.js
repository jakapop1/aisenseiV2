import React, { useState } from 'react';
import { ArrowRight, Lightbulb, Code, Shield, Brain, Play, ChevronRight } from 'lucide-react';

const SplunkAI = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeVideoCategory, setActiveVideoCategory] = useState('introduction');

  const overview = [
    {
      title: "What is Splunk?",
      description: "Splunk is a powerful platform for searching, monitoring, and analyzing machine-generated big data. It helps in transforming data into meaningful insights for decision-making.",
      steps: [
        "Data Ingestion: Collects data from various sources in real-time",
        "Data Indexing: Organizes and stores data efficiently",
        "Data Visualization: Generates interactive reports and dashboards"
      ]
    }
  ];

  const features = [
    {
      title: "Key Splunk Features",
      steps: [
        "Search and Investigation: Allows fast data retrieval for queries and root cause analysis",
        "Real-Time Monitoring: Enables real-time alerts and monitoring of system logs and events",
        "Data Visualization: Provides dashboards and reports for visual insights",
        "Machine Learning Toolkit: Integrates AI and ML for predictive analytics",
        "Splunk AI: Uses AI to enhance anomaly detection, forecasting, and operational intelligence"
      ]
    },
    {
      title: "Splunk AI Enhancements",
      steps: [
        "Anomaly Detection: Identifies unusual patterns automatically",
        "Predictive Analytics: Forecasts trends based on historical data",
        "Incident Response: Uses AI to streamline response and investigation processes",
        "Automated Insights: Reduces the manual effort in discovering insights from data"
      ]
    }
  ];

  const useCases = [
    {
      title: "Security Monitoring",
      icon: <Shield className="w-6 h-6 mb-2" />,
      points: [
        "Detects potential threats and anomalies",
        "Supports incident response and forensics",
        "Helps with compliance reporting",
        "Protects against data breaches"
      ]
    },
    {
      title: "IT Operations",
      icon: <Brain className="w-6 h-6 mb-2" />,
      points: [
        "Monitors application and infrastructure performance",
        "Automates root-cause analysis for faster issue resolution",
        "Improves system uptime and reliability",
        "Optimizes resource allocation"
      ]
    },
    {
      title: "Business Analytics",
      icon: <Lightbulb className="w-6 h-6 mb-2" />,
      points: [
        "Analyzes customer behavior and product performance",
        "Generates actionable insights for business strategy",
        "Improves service delivery and customer satisfaction",
        "Supports data-driven decision-making"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Optimizing Splunk Usage",
      icon: <Shield className="w-4 h-4 text-yellow-400 mt-1" />,
      points: [
        "Index data strategically to save costs",
        "Use filtering and summarization to improve query speed",
        "Regularly update Splunk with the latest patches",
        "Leverage role-based access to secure sensitive data"
      ]
    },
    {
      title: "Leveraging Splunk AI Responsibly",
      icon: <Shield className="w-4 h-4 text-yellow-400 mt-1" />,
      points: [
        "Validate AI-generated insights for accuracy",
        "Maintain transparency about AI-driven decisions",
        "Respect data privacy and adhere to compliance",
        "Continuously monitor and refine AI models"
      ]
    }
  ];

  const videoCategories = [
    { id: 'introduction', label: 'Introduction to Splunk' },
    { id: 'features', label: 'Exploring Splunk Features' },
    { id: 'usecases', label: 'Use Cases in Action' },
    { id: 'ai', label: 'Splunk AI in Depth' }
  ];

  const videos = {
    introduction: [
      {
        title: "IDK",
        thumbnail: "https://img.youtube.com/vi/0VNoK0hJP-k/0.jpg",
        videoId: "0VNoK0hJP-k",
        author: "Splunk",
        description: "IDK"
      },
    ],
    features: [
      {
        title: "Understanding Splunk Dashboards",
        thumbnail: "https://img.youtube.com/vi/iPrNglmzXiM/0.jpg",
        videoId: "iPrNglmzXiM",
        author: "Automation Testing with Joe Colantonio",
        description: "Splunk launching Splunk AI"
      },

    ],
    usecases: [
      {
        title: "Splunk GPT",
        thumbnail: "https://img.youtube.com/vi/0VNoK0hJP-k/0.jpg",
        videoId: "0VNoK0hJP-k",
        author: "BSidesAugusta",
        description: "Making data retrieval more intuitive and efficient with SplunkGPT"
    },
    {
      title: "Using AI to solve IT problems with a twist",
      thumbnail: "https://img.youtube.com/vi/CISH77-92gE/0.jpg",
      videoId: "CISH77-92gE",
      author: "Splunk",
      description: "Using AI to solve IT problems with a twist"
    },
    {
        title: "Building Splunk Dashboards with ChatGPT",
        thumbnail: "https://img.youtube.com/vi/XyEnesetDF8/0.jpg",
        videoId: "XyEnesetDF8",
        author: "Splunk",
        description: "This video will demonstrate how to use ChatGPT to build Splunk dashboards, the code can be found here: https://github.com/Manuelch94/wireframeGenerator"
      },
  ],
  ai: [
    {
        title: "IDK",
        thumbnail: "https://img.youtube.com/vi/0VNoK0hJP-k/0.jpg",
        videoId: "0VNoK0hJP-k",
        author: "Splunk",
        description: "IDK"
      },
  ]
};

const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'usecases', label: 'Use Cases' },
    { id: 'videos', label: 'Learning Videos' },
    { id: 'bestpractices', label: 'Best Practices' }
  ];

  return (
    <div className="site-background section-padding">
      <h1 className="heading-primary text-3xl mb-6">Understanding Splunk & Splunk AI</h1>
      
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

      {activeTab === 'features' && (
        <div className="space-y-8">
          {features.map((section, index) => (
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

{activeTab === 'videos' && (
        <div className="space-y-8">
          <div className="flex space-x-4 mb-6">
            {videoCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveVideoCategory(category.id)}
                className={`px-4 py-2 rounded-lg ${
                  activeVideoCategory === category.id 
                    ? 'bg-blue-600/50 border border-blue-500 text-white' 
                    : 'bg-gray-700/50 border border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                {category.label}
              </button>
            ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {videos[activeVideoCategory].map((video, index) => (
    <div key={index} className="module-card hover:border-blue-500 transition-colors cursor-pointer">
      <div className="relative mb-4">
        {video.videoId ? (
          // Use iframe for YouTube video embedding
          <iframe
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        ) : (
          // Use image if no videoId
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full rounded-lg"
          />
        )}
      </div>

      <div className="space-y-2">
        <h3 className="card-title text-lg font-semibold flex items-center">
          <span>{video.title}</span>
          <ChevronRight className="w-4 h-4 ml-2 text-blue-400" />
        </h3>
        <p className="text-blue-400 text-sm">{video.author}</p>
        <p className="text-gray-300 text-sm">{video.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
      )};
  </div>
  );
};


export default SplunkAI;