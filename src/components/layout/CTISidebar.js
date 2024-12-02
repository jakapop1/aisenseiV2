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
      title: '1. Introduction to CTI with Open WebUI',
      path: '/cti'
    },
    introduction: {
      title: '2. What Is Open WebUI?',
      path: '/cti/openwebui'
    },
    install: {
      title: '3. Open WebUI Installation',
      items: [
        { path: '/cti/waystoinstall', text: '3.1. Open WebUI Installation Methods' },
        { path: '/cti/docker', text: '3.2. Installing Docker' },
        { path: '/cti/setup', text: '3.3. Installing Open WebUI With Docker' }
      ] 
    },
    setup: {
      title: '4. Open WebUI Setup',
      items: [
        { path: '/cti/settings', text: '4.1 Configuring Open WebUI' },
        { path: '/cti/RAG', text: '4.2 Create Your CTI Knowledge Collection' },
        { path: '/cti/tools', text: '4.3 Tools and Functions' },
        { path: '/cti/pipelines', text: '4.4 Introduction to Pipelines in Open WebUI'},
        { path: '/cti/using', text: '4.5 Using Open WebUI' }
      ]
    },
    exercises: {
      title: '5. CTI Exercises',
      items: [
        { path: '/cti/prompt-engineering', text: '5.1 Prompt Engineering and Models' },
        { path: '/cti/exercises/RAG-exercise', text: '5.2 Exercise: Testing The Benefits of RAG' },
        { path: '/cti/advanced-analysis', text: '5.3 Advanced Analysis Exercises' }
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