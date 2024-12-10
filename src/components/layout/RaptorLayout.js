// src/components/layout/LPWLayout.js
import React from 'react';
import RaptorSidebar from './RaptorSidebar';

const RaptorLayout = ({ children }) => {
  return (
    <div className="app">
      <RaptorSidebar />
      <main className="content-with-sidebar">
        <div className="lpw-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default RaptorLayout;