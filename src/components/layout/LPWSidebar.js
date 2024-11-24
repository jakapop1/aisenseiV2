// src/components/layout/LPWSidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LPWSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = {
    introduction: {
      title: 'Introduction to LPW',
      path: '/lpw/introduction'
    },
    setup: {
      title: 'LPW Setup',
      items: [
        { path: '/lpw/python-wireshark', text: 'Installing Python and Wireshark' },
        { path: '/lpw/ollama', text: 'Installing Ollama' },
        { path: '/lpw/venv', text: 'Setting Up Virtual Environment' },
        { path: '/lpw/interface', text: 'Setting Up LPW interface' },
        { path: '/lpw/settings', text: 'Setting Up LPW settings' },
        { path: '/lpw/using', text: 'Using LPW' }
      ]
    },
    exercises: {
      title: 'LPW Exercises',
      items: [
        { path: '/lpw/prompt-engineering', text: 'Prompt Engineering and Models' },
        { path: '/lpw/basic-analysis', text: 'Basic Analysis Exercises' },
        { path: '/lpw/advanced-analysis', text: 'Advanced Analysis Exercises' }
      ]
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        Local Packet Whisperer (LPW)
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

export default LPWSidebar;