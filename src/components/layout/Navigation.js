import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path) && path !== '/' ? true : location.pathname === path;
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1 className="nav-title">AI Sensei</h1>
        </Link>
        <nav>
          <div className="nav-links">
            {[
              { path: '/lpw', text: 'LPW for Packet Analysis' },
              { path: '/raptor', text: 'Packet Raptor' },
              { path: '/cti', text: 'CTI with OpenWebUI' },
              { path: '/g3po', text: 'Decompilation with G3PO' },
              { path: '/garak', text: 'LLM Scanning with Garak' },
              { path: '/agents', text: 'Agentic Automation w/ CSLA' },
              { path: '/contact-page', text: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
