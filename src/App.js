import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< Updated upstream
import Home from './components/Home';
import CTIPage from './components/CTIPage';
import PcapTutorial from './components/PCAP';
import DocumentParsingTutorial from './components/DocumentParsingTutorial';
import GenAITutorial from './components/GenAITutorial';
import RAGTutorial from './components/RAGTutorial';
import PromptEngineeringTutorial from './components/PromptEngineeringTutorial';
import SplunkAI from './components/SplunkAI';
import AIHub from './components/AIHub';
=======
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import LPWLanding from './pages/lpw/LPWLanding';
import LPWPythonWireshark from './pages/lpw/LPWPythonWireshark';
import OllamaSetup from './pages/lpw/OllamaSetup';
import CTILanding from './pages/cti/CTILanding';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
<<<<<<< Updated upstream
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AI-Hub" element={<AIHub />} />
        <Route path="/modules/cti" element={<CTIPage />} />
        <Route path="/modules/pcap" element={<PcapTutorial />} />
        <Route path="/modules/doc-parsing" element={<DocumentParsingTutorial />} />
        <Route path="/modules/rag" element={<RAGTutorial />} />
        <Route path="/modules/gen-ai" element={<GenAITutorial />} />
        <Route path="/modules/prompt-engineering" element={<PromptEngineeringTutorial />} />
        <Route path="/modules/splunk-ai" element={<SplunkAI />} />
      </Routes>
=======
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lpw" element={<LPWLanding />} />
            <Route path="/lpw/introduction" element={<LPWLanding />} />
            <Route path="/lpw/python-wireshark" element={<LPWPythonWireshark />} />
            <Route path="/lpw/ollama" element={<OllamaSetup />} />
            <Route path="/cti" element={<CTILanding />} />
          </Routes>
        </main>
      </div>
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
