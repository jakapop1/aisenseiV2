// src/components/layout/LPWLayout.js
import React from 'react';
import LPWSidebar from './LPWSidebar';

const LPWLayout = ({ children }) => {
  return (
    <div className="app">
      <LPWSidebar />
      <main className="content-with-sidebar">
        <div className="lpw-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default LPWLayout;