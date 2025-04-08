import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AgentsSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = {
    introduction: {
      title: '1. Introduction to LLM Agents',
      path: '/agents/introduction',
      items: [
        { path: '/agents/introduction', text: '1.1 Module Introduction' },
        { path: '/agents/introduction2', text: '1.2 What is cyber-security-llm-agents?' }
      ]
    },
    setup: {
      title: '2. LLM Agents Setup',
      path: '/agents/venv',
      items: [
        { path: '/agents/venv', text: '2.1 Installing Python' },
        { path: '/agents/venv', text: '2.2 Setting Up a Virtual Environment' },
        { path: '/agents/caldera', text: '2.3 Installing Caldera' },
        { path: '/agents/setup', text: '2.4 Installing cyber-security-llm-agents' }
      ]
    },
    exercises: {
      title: '3. LLM Agents Exercises',
      path: '/agents/basic',
      items: [
        { path: '/agents/basic', text: '3.1 Basic Actions' },
        { path: '/agents/create', text: '3.2 Creating New Actions' },
      ]
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        cyber-security-llm-agents (LLM Agents)
      </h2>
      
      {Object.entries(menuItems).map(([key, section]) => (
        <div key={key} className="sidebar-section">
          <Link 
            to={section.path}
            className={`sidebar-section-title ${isActive(section.path) ? 'active' : ''}`}
          >
            <h3>{section.title}</h3>
          </Link>
          <ul className="sidebar-list">
            {section.items.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default AgentsSidebar;
