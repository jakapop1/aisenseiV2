// src/components/layout/LPWSidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CTISidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = {
    introduction: {
      title: 'Introduction to OpenWebUI',
      path: '/cti/introduction'
    },
    setup: {
      title: 'OpenWebUI Setup',
      items: [
        { path: '/cti/ollama', text: 'Installing Ollama' },
        { path: '/cti/docker', text: 'Setting Up The Docker Container' },
        { path: '/cti/RAG', text: 'Setting Up the RAG Knowledge Base with OpenWebUI' },
        { path: '/cti/settings', text: 'Setting Up OpenWebUI settings' },
        { path: '/cti/tools', text: 'Creating Tools and Functions in OpenWebUI' },
        { path: '/cti/pipelines', text: 'Using Pipelines in OpenWebUI'},
        { path: '/cti/using', text: 'Using OpenWebUI' }
      ]
    },
    exercises: {
      title: 'CTI Exercises',
      items: [
        { path: '/cti/prompt-engineering', text: 'Prompt Engineering and Models' },
        { path: '/cti/basic-analysis', text: 'Basic Analysis Exercises' },
        { path: '/cti/advanced-analysis', text: 'Advanced Analysis Exercises' }
      ]
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        OpenWebUI and RAG
      </h2>
      
      <div className="sidebar-section">
        <Link 
          to={menuItems.introduction.path}
          className={`sidebar-link ${isActive(menuItems.introduction.path) ? 'active' : ''}`}
        >
          {menuItems.introduction.title}
        </Link>
      </div>

      {Object.entries({setup: menuItems.setup, exercises: menuItems.exercises}).map(([key, section]) => (
        <div key={key} className="sidebar-section">
          <h3 className="sidebar-section-title">{section.title}</h3>
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

export default CTISidebar;