// src/components/layout/LPWSidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CTISidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = {
    module: {
      title: 'Introduction to CTI with Open WebUI',
      path: '/cti'
    },
    introduction: {
      title: 'What Is Open WebUI?',
      path: '/cti/openwebui'
    },
    install: {
      title: 'Open WebUI Installation',
      items: [
        { path: '/cti/waystoinstall', text: 'Open WebUI Installation Methods' },
        { path: '/cti/docker', text: 'Installing Docker' },
        { path: '/cti/setup', text: 'Installing Open WebUI With Docker' }
      ] 
    },
    setup: {
      title: 'Open WebUI Setup',
      items: [
        { path: '/cti/settings', text: 'Configuring Open WebUI' },
        { path: '/cti/RAG', text: 'Create Your CTI Knowledge Collection' },
        { path: '/cti/tools', text: 'Tools and Functions' },
        { path: '/cti/pipelines', text: 'Introduction to Pipelines in Open WebUI'},
        { path: '/cti/using', text: 'Using Open WebUI' }
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
          to={menuItems.module.path}
          className={`sidebar-link ${isActive(menuItems.module.path) ? 'active' : ''}`}
        >
          {menuItems.module.title}
        </Link>
      </div>
      
      <div className="sidebar-section">
        <Link 
          to={menuItems.introduction.path}
          className={`sidebar-link ${isActive(menuItems.introduction.path) ? 'active' : ''}`}
        >
          {menuItems.introduction.title}
        </Link>
      </div>

      {Object.entries({install: menuItems.install, setup: menuItems.setup, exercises: menuItems.exercises}).map(([key, section]) => (
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