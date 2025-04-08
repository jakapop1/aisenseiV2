// src/components/layout/AgentsLayout.js
import React from 'react';
import AgentsSidebar from "./AgentsSidebar";

const AgentsLayout = ({ children }) => {
  return (
    <div className="app">
      <AgentsSidebar />
      <main className="content-with-sidebar">
        <div className="lpw-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AgentsLayout;