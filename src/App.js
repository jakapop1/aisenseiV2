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

import G3POLanding from './pages/g3po/g3poLanding';
import G3POIntro from './pages/g3po/g3poIntroduction';
import G3PODockerSetup from './pages/g3po/g3poDockerInstall';
import G3POExample from './pages/g3po/g3poExample';
import G3PODockerOllama from './pages/g3po/g3poOllamaDocker';
import GhidraInstallation from './pages/g3po/ghidraInstallation';
import G3POScripts from './pages/g3po/g3poScripts';

import GarakFirstScan from './pages/garak/garakFirstScan';
import GarakLanding from './pages/garak/garakLanding';
import GarakInitialSetup from './pages/garak/garakInitialSetup';
import GarakUnderstandingOutput from './pages/garak/garakUnderstandingOutput';

import AgentsLanding from './pages/agents/AgentsLanding';
import AgentsLanding2 from './pages/agents/AgentsLanding2';
import AgentsLanding3 from './pages/agents/AgentsLanding3';
import PythonSetup from "./pages/agents/AgentsSetup/PythonSetup";
import VenvSetup from "./pages/agents/AgentsSetup/VenvSetup";
import CalderaSetup from './pages/agents/AgentsSetup/CalderaSetup';
import AgentsSetup from './pages/agents/AgentsSetup/AgentsSetup';
import AgentsOllamaSetup from './pages/agents/AgentsSetup/AgentsOllamaSetup';
import BasicAgents from './pages/agents/Exercises/BasicAgents';
import CreatingAgents from './pages/agents/Exercises/CreatingAgents';
import GarakCustomProbes from './pages/garak/garakCustomProbes';
import GarakExploitationAnalysis from './pages/garak/garakExploitationAnalysis';

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

            <Route path="/g3po" element={<G3POLanding />} />
            <Route path="/g3po/g3po-introduction" element={<G3POIntro />} />
            <Route path="/g3po/docker" element={<G3PODockerSetup />} />
            <Route path="/g3po/docker/ollama" element={<G3PODockerOllama />} />
            <Route path="/g3po/docker/ollama/ghidra" element={<GhidraInstallation />} />
            <Route path="/g3po/docker/ollama/ghidra/script" element={<G3POScripts />} />
            <Route path="/g3po/g3po-introduction/g3po-example" element={<G3POExample />} />

            <Route path="/garak" element={<GarakLanding/>} />
            <Route path="/garak/first-scan" element={<GarakFirstScan />} />
            <Route path="/garak/initial-setup" element={<GarakInitialSetup />} />
            <Route path="/garak/understanding-output" element={<GarakUnderstandingOutput />} />
            <Route path="/garak/exploitation-analysis" element={<GarakExploitationAnalysis />} />

            <Route path="/garak/custom-probes" element={<GarakCustomProbes />} />

            <Route path="/agents" element={<AgentsLanding />} />
            <Route path="/agents/introduction" element={<AgentsLanding />} />
            <Route path="/agents/introduction2" element={<AgentsLanding2 />} />
            <Route path="/agents/introduction3" element={<AgentsLanding3 />} />
            <Route path="/agents/python" element={<PythonSetup />} />
            <Route path="/agents/venv" element={<VenvSetup />} />
            <Route path="/agents/caldera" element={<CalderaSetup />} />
            <Route path="/agents/setup" element={<AgentsSetup />} />
            <Route path="/agents/ollama" element={<AgentsOllamaSetup />} />
            <Route path="/agents/basic" element={<BasicAgents />} />
            <Route path="/agents/create" element={<CreatingAgents />} />



          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
