import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';

// Pages
import Home from './pages/Home';
import LPWLanding from './pages/lpw/LPWLanding';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lpw/*" element={<LPWLanding />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
