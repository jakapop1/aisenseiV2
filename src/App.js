import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CTIPage from './components/CTIPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules/cti" element={<CTIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
