import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import LPWLanding from './pages/lpw/LPWLanding';
import LPWPythonWireshark from './pages/lpw/LPWSetup/LPWPythonWireshark';
import OllamaSetup from './pages/lpw/LPWSetup/OllamaSetup';
import VirtualEnvironmentSetup from './pages/lpw/LPWSetup/VitrualEnvironmentSetup';
import LPWConfiguration from './pages/lpw/LPWSetup/LPWConfiguration';
import UsingLPW from './pages/lpw/LPWSetup/UsingLPW';
import LPWExercises from './pages/lpw/Exercises/LPWExercises';
import UnderstandingLLMs from './pages/lpw/Exercises/UnderstandingLLMS';
import ModelSelection from './pages/lpw/Exercises/ModelSelection';
import PromptEngineering from './pages/lpw/Exercises/PromptEngineering';
import CTILanding from './pages/cti/CTILanding';
import CTISetup from './pages/cti/CTIInstallation';
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
            <Route path="/lpw/venv" element={<VirtualEnvironmentSetup />} />
            <Route path="/lpw/configuration" element={<LPWConfiguration />} />
            <Route path="/lpw/using" element={<UsingLPW />} />
            <Route path="/lpw/UnderstandingLLMs" element={<UnderstandingLLMs />} />
            <Route path="/lpw/ModelSelection" element={<ModelSelection />} />
            <Route path="/lpw/Exercises" element={<LPWExercises />} />
            <Route path="/lpw/PromptEngineering" element={<PromptEngineering />} />
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
