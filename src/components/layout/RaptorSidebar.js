import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const RaptorSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = {
    introduction: {
      title: '1. Introduction to Packet Raptor',
      path: '/raptor/introduction',
      items: [
        { path: '/raptor/introduction', text: '1.1 Introduction to Packet Raptor' }
      ]
    },
    setup: {
      title: '2. Packet Raptor Setup',
      path: '/raptor/python',
      items: [
        { path: '/raptor/python', text: '2.1 Installing Python' },
        { path: '/raptor/docker', text: '2.2 Installing Docker' },
        { path: '/raptor/raptor-config', text: '2.3 Configuring Packet Raptor' },
        { path: '/raptor/raptor-start', text: '2.4 Starting Packet Raptor' }
      ]
    },
    using: {
      title: '3. Interactive Demo',
      path: '/raptor/try-packet-raptor',
      items: [
        { path: '/raptor/try-packet-raptor', text: '3.1 Try Packet Raptor' },
        { path: '/raptor/using-the-demo', text: '3.2 Using the Demo' },
      ]
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        Packet Raptor
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

export default RaptorSidebar;