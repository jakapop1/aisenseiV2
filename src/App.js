import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import LPWLanding from './pages/lpw/LPWLanding';
import LPWPythonWireshark from './pages/lpw/LPWPythonWireshark';
import CTILanding from './pages/cti/CTILanding';
import CTISetup from './pages/cti/CTIInstallation';
import OllamaSetup from './pages/lpw/OllamaSetup';
import CTIIntro from './pages/cti/CTIIntroduction';
import DockerSetup from './pages/cti/DockerInstall';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lpw" element={<LPWLanding />} />
            <Route path="/lpw/introduction" element={<LPWLanding />} />
            <Route path="/lpw/python-wireshark" element={<LPWPythonWireshark />} />
            <Route path="/lpw/ollama" element={<OllamaSetup />} />
            <Route path ="/cti" element={<CTILanding />} />
            <Route path ="/cti/introduction" element={<CTIIntro />} />
            <Route path ="/cti/docker" element={<DockerSetup />} />
            <Route path ="/cti/setup" element={<CTISetup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
