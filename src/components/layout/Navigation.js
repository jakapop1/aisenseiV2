import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path) && path !== '/' ? true : location.pathname === path;
  };

  return (
    <header className="fixed w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">AI Sensei</h1>
        <nav>
          <div className="flex gap-4">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive('/') ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/lpw" 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive('/lpw') ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              LPW for Packet Analysis
            </Link>
            <Link 
              to="/raptor" 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive('/raptor') ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              Packet Raptor
            </Link>
            <Link 
              to="/cti" 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive('/cti') ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              CTI with OpenWebUI
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive('/contact') ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;