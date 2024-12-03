import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LPWSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = {
    introduction: {
      title: '1. Introduction to LPW',
      path: '/lpw/introduction',
      items: [
        { path: '/lpw/introduction', text: '1.1 Introduction to LPW' }
      ]
    },
    setup: {
      title: '2. LPW Setup',
      path: '/lpw/python-wireshark', 
      items: [
        { path: '/lpw/python-wireshark', text: '2.1 Installing Python and Wireshark' },
        { path: '/lpw/ollama', text: '2.2 Installing Ollama' },
        { path: '/lpw/venv', text: '2.3 Setting Up LPW in a Virtual Environment' },
        { path: '/lpw/configuration', text: '2.4 Configuring LPW' },
        { path: '/lpw/using', text: '2.5 Using LPW' }
      ]
    },
    exercises: {
      title: '3. LPW Exercises',
      path: '/lpw/Exercises', 
      items: [
        { path: '/lpw/understandingLLMS', text: '3.1 Prompt Engineering and Models' },
        { path: '/lpw/basic-analysis', text: '3.2 Basic Analysis Exercises' },
        { path: '/lpw/advanced-analysis', text: '3.3 Advanced Analysis Exercises' }
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
          className={`sidebar-section-title  ${isActive(menuItems.introduction.path) ? 'active' : ''}`}
        >
          <h3>{menuItems.introduction.title}</h3>
        </Link>
      </div>

      {Object.entries({setup: menuItems.setup, exercises: menuItems.exercises}).map(([key, section]) => (
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

export default LPWSidebar;