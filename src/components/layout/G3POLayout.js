// src/components/layout/LPWLayout.js
import React from 'react';
import G3POSidebar from './G3POSidebar';
const G3POLayout = ({ children }) => {
  return (
    <div className="app">
      <G3POSidebar />
      <main className="content-with-sidebar">
        <div className="lpw-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default G3POLayout;