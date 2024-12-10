import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import ContactPage from './pages/lpw/ContactUs';
import LPWLanding from './pages/lpw/LPWLanding';
import LPWPythonWireshark from './pages/lpw/LPWSetup/LPWPythonWireshark';
import OllamaSetup from './pages/lpw/LPWSetup/OllamaSetup';
import VirtualEnvironmentSetup from './pages/lpw/LPWSetup/VitrualEnvironmentSetup';
import LPWConfiguration from './pages/lpw/LPWSetup/LPWConfiguration';
import UsingLPW from './pages/lpw/LPWSetup/UsingLPW';
import LPWExercises from './pages/lpw/Exercises/LPWExercises';
import UnderstandingLLMs from './pages/lpw/Exercises/UnderstandingLLMS';
import EnhanceLPW from './pages/lpw/Exercises/EnhancingLPW';
import CTILanding from './pages/cti/CTILanding';
import CTISetup from './pages/cti/CTIInstallation';
import CTIIntro from './pages/cti/CTIIntroduction';
import DockerSetup from './pages/cti/DockerInstall';
import CTIRag from './pages/cti/CTIRag';
import CTISettings from './pages/cti/CTISettings';
import CTITools from './pages/cti/CTIToolsFunc';
import CTIPipes from './pages/cti/CTIPipelines';
import CTIExercise from './pages/cti/exercises/CTIRAGExercise';
import CTIWaysToInstall from './pages/cti/CTIInstallMethods';

import RaptorLanding from './pages/raptor/RaptorLanding';
import DockerRaptorSetup from './pages/raptor/DockerSetup';
import PythonRaptorSetup from './pages/raptor/PythonSetup';
import RaptorStart from './pages/raptor/RaptorStart';
import RaptorConfig from './pages/raptor/RaptorConfig';
import TryRaptor from './pages/raptor/TryRaptor';
import UsingDemo from './pages/raptor/UsingDemo';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/lpw" element={<LPWLanding />} />
            <Route path="/lpw/introduction" element={<LPWLanding />} />
            <Route path="/lpw/python-wireshark" element={<LPWPythonWireshark />} />
            <Route path="/lpw/ollama" element={<OllamaSetup />} />
            <Route path="/lpw/venv" element={<VirtualEnvironmentSetup />} />
            <Route path="/lpw/configuration" element={<LPWConfiguration />} />
            <Route path="/lpw/using" element={<UsingLPW />} />
            <Route path="/lpw/UnderstandingLLMs" element={<UnderstandingLLMs />} />
            <Route path="/lpw/enhance-lpw" element={<EnhanceLPW />} />
            <Route path="/lpw/Exercises" element={<LPWExercises />} />
            <Route path ="/cti" element={<CTILanding />} />
            <Route path ="/cti/openwebui" element={<CTIIntro />} />
            <Route path ="/cti/waystoinstall" element={<CTIWaysToInstall />} />
            <Route path ="/cti/docker" element={<DockerSetup />} />
            <Route path ="/cti/setup" element={<CTISetup />} />
            <Route path = "/cti/RAG" element={<CTIRag />} />
            <Route path = "/cti/settings" element={<CTISettings />} />
            <Route path = "/cti/tools" element={<CTITools />} />
            <Route path = "/cti/pipelines" element={<CTIPipes />} />
            <Route path = "/cti/exercises/RAG-exercise" element={<CTIExercise />} />
            
            <Route path="/raptor" element={<RaptorLanding />} />
            <Route path="/raptor/introduction" element={<RaptorLanding />} />
            <Route path="/raptor/docker" element={<DockerRaptorSetup />} />
            <Route path="/raptor/python" element={<PythonRaptorSetup />} />
            <Route path="/raptor/raptor-start" element={<RaptorStart />} />
            <Route path="/raptor/raptor-config" element={<RaptorConfig />} />
            <Route path="/raptor/try-packet-raptor" element={<TryRaptor />} />
            <Route path="/raptor/using-the-demo" element={<UsingDemo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
