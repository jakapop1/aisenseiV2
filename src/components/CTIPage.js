import React from 'react';
import { Link } from 'react-router-dom';
import './global.css';

const CTIPage = () => {
  return (
    <div className="site-background section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/" className="nav-button-primary inline-block mb-8">
          ← Back to Modules
        </Link>

        <div className="module-card">
          <h1 className="heading-primary">AI for Cyber Threat Intelligence</h1>
          
          <div className="space-y-6 text-secondary">
            <p className="leading-relaxed">
              Artificial Intelligence (AI) is becoming a vital tool in Cyber Threat Intelligence (CTI). 
              This module explores how AI can enhance your CTI capabilities and workflow.
            </p>

            <h2 className="card-title mt-8 mb-4">Key Topics:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understanding AI's role in threat detection</li>
              <li>Machine Learning for pattern recognition in threat data</li>
              <li>Automated threat intelligence gathering</li>
              <li>AI-powered threat analysis and correlation</li>
              <li>Integration of AI tools in CTI workflows</li>
            </ul>

            <h2 className="card-title mt-8 mb-4">Learning Objectives:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand how AI can enhance CTI processes</li>
              <li>Learn to leverage AI tools for threat analysis</li>
              <li>Develop skills in AI-assisted threat hunting</li>
              <li>Master AI-powered threat intelligence gathering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTIPage;