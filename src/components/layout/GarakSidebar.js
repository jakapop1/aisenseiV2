import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GarakSidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const menuItems = {
    introduction: {
      title: '1. Scanning LLMs with Garak',
      path: '/garak',
      items: [
        { path: '/garak', text: 'Module Introduction' },
        { path: '/garak/initial-setup', text: '1.2. Garak Setup' },
        { path: '/garak/first-scan', text: '1.2. Your First Scan with Garak' },
        { path: '/garak/understanding-output', text: '1.3. Understanding Output' },
        {path: '/garak/exploitation-analysis', text: '1.4. Probe Example: Exploitation Analysis' },
        {path: '/garak/custom-probes', text: '1.4. Custom Probes' }
      ]
    },
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        Garak
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

export default GarakSidebar;
