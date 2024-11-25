// src/components/layout/LPWLayout.js
import React from 'react';
import CTISidebar from './CTISidebar';

const CTILayout = ({ children }) => {
  return (
    <div className="app">
      <CTISidebar />
      <main className="content-with-sidebar">
        <div className="lpw-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default CTILayout;