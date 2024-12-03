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
      title: '1. CTI with Open WebUI',
      items: [
        { path: '/cti', text: '1.1. Module Introuction'},
        { path: '/cti/openwebui', text: '1.2. What Is Open WebUI?' }
      ]
    },
    install: {
      title: '2. Open WebUI Installation',
      items: [
        { path: '/cti/waystoinstall', text: '2.1. Open WebUI Installation Methods' },
        { path: '/cti/docker', text: '2.2. Installing Docker' },
        { path: '/cti/setup', text: '2.3. Installing Open WebUI With Docker' }
      ] 
    },
    setup: {
      title: '3. Open WebUI Setup',
      items: [
        { path: '/cti/settings', text: '3.1. Configuring Open WebUI' },
        { path: '/cti/RAG', text: '3.2 Create Your CTI Knowledge Collection' },
        { path: '/cti/tools', text: '3.3 Tools and Functions' },
        { path: '/cti/pipelines', text: '3.4 Introduction to Pipelines in Open WebUI'},
        { path: '/cti/using', text: '3.5 Using Open WebUI' }
      ]
    },
    exercises: {
      title: '4. CTI Exercises',
      items: [
        { path: '/cti/prompt-engineering', text: '4.1 Prompt Engineering and Models' },
        { path: '/cti/exercises/RAG-exercise', text: '4.2 Exercise: Testing The Benefits of RAG' },
        { path: '/cti/advanced-analysis', text: '4.3 Advanced Analysis Exercises' }
      ]
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        OpenWebUI and RAG
      </h2>

      {Object.entries({introduction: menuItems.introduction, install: menuItems.install, setup: menuItems.setup, exercises: menuItems.exercises}).map(([key, section]) => (
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