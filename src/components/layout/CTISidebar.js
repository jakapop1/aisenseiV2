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
      path: '/cti',
      items: [
        { path: '/cti', text: '1.1. Module Introduction' },
        { path: '/cti/openwebui', text: '1.2. What Is Open WebUI?' }
      ]
    },
    install: {
      title: '2. Open WebUI Installation',
      path: '/cti/waystoinstall',
      items: [
        { path: '/cti/waystoinstall', text: '2.1. Open WebUI Installation Methods' },
        { path: '/cti/docker', text: '2.2. Installing Docker' },
        { path: '/cti/setup', text: '2.3. Installing Open WebUI With Docker' }
      ] 
    },
    setup: {
      title: '3. Open WebUI Setup',
      path: '/cti/settings',
      items: [
        { path: '/cti/settings', text: '3.1. Configuring Open WebUI' },
        { path: '/cti/RAG', text: '3.2 Create Your CTI Knowledge Collection' },
        { path: '/cti/tools', text: '3.3 Tools and Functions' },
        { path: '/cti/pipelines', text: '3.4 Introduction to Pipelines in Open WebUI'}
      ]
    },
    exercises: {
      title: '4. CTI Exercises',
      path: '/cti/exercises/RAG-exercise',
      items: [
        { path: '/cti/exercises/RAG-exercise', text: '4.1 Exercise: Testing The Benefits of RAG' }
      ]
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        OpenWebUI and RAG
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

export default CTISidebar;
