import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const G3POSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const menuItems = {
    introduction: {
      title: '1. Introduction',
      path: '/g3po',
      items: [
        { path: '/g3po', text: '1.1 Use Case' },
        { path: '/g3po/g3po-introduction', text: '1.2 What is G3PO?' },
        { path: '/g3po/g3po-introduction/g3po-example', text: '1.3 Example Use Case' }
      ]
    },
    setup: {
      title: '2. Set Up',
      path: '/g3po/docker',
      items: [
        { path: '/g3po/docker', text: 'Docker Installation' },
        { path: '/g3po/docker/ollama', text: 'Ollama with Docker Setup'},
        { path: '/g3po/docker/ollama/ghidra', text: 'Installing and Using Ghidra' },
        { path: '/g3po/docker/ollama/ghidra/script', text: 'Running the G3PO Script' }
      ]
    }
  };
  
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        G3PO
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

export default G3POSidebar;
