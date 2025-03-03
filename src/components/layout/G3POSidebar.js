import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const G3POSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const menuItems = {
    introduction: {
      title: '1. Decompiling with G3PO',
      path: '/g3po',
      items: [
        { path: '/g3po', text: 'Module Introduction' },
        { path: '/g3po/g3po-introduction', text: '1.2. What Is G3PO?' }
      ]
    },
    Example: {
      title: 'Example',
      path: '/g3po/g3po-introduction/g3po-example',
      items: [
        { path: '/g3po/g3po-introduction/g3po-example', text: 'Using Ghidra with G3PO' },
      ]
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        G3PO and Ollama
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
