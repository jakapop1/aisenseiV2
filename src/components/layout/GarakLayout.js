// src/components/layout/LPWLayout.js
import React from 'react';
import GarakSidebar from './GarakSidebar';
const GarakLayout = ({ children }) => {
  return (
    <div className="app">
      <GarakSidebar />
      <main className="content-with-sidebar">
        <div className="lpw-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default GarakLayout;