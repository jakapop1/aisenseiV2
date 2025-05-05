import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AgentsSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = {
    introduction: {
      title: '1. Introduction to CSLA',
      path: '/agents/introduction',
      items: [
        { path: '/agents/introduction', text: '1.1 Module Introduction' },
        { path: '/agents/introduction2', text: '1.2 What is CSLA?' },
        { path: '/agents/introduction3', text: '1.3 Video Walkthrough' }
      ]
    },
    setup: {
      title: '2. CSLA Setup',
      path: '/agents/venv',
      items: [
        { path: '/agents/python', text: '2.1 Installing Python' },
        { path: '/agents/venv', text: '2.2 Installing Docker' },
        { path: '/agents/caldera', text: '2.3 Installing Caldera' },
        { path: '/agents/setup', text: '2.4 Installing CSLA' },
        { path: '/agents/ollama', text: '2.5 Configuring CSLA' }
      ]
    },
    exercises: {
      title: '3. CSLA Exercises',
      path: '/agents/basic',
      items: [
        { path: '/agents/basic', text: '3.1 Using CSLA' },
        { path: '/agents/create', text: '3.2 Creating New Actions' },
      ]
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        cyber-security-llm-agents (CSLA)
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
