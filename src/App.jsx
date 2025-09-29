import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Malware from './pages/malware/Malware';
import Footer from './components/Footer';
import TiposMalware from './pages/TiposMalware';
import Riesgos from './pages/Riesgos';
import Protegerme from './pages/Protegerme';
import Virus from './pages/malware/Virus';
import Troyano from './pages/malware/Troyano';
import Ramsomware from './pages/malware/Ramsomware';
import Gusano from './pages/malware/Gusano';
import Spyware from './pages/malware/Spyware';
import Adware from './pages/malware/Adware';
import Rootkit from './pages/malware/Rootkit';
import Keylogger from './pages/malware/Keylogger';
import Bootnet from './pages/malware/Bootnet';
import Backdoor from './pages/malware/Backdoor';
import Exploit from './pages/malware/Exploit';
import Fileless from './pages/malware/Fileless';
import Scareware from './pages/malware/Scareware';
import Quiz from './components/Quiz';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/malware/virus" element={<Virus />} />
        <Route path="/malware/troyano" element={<Troyano />} /> 
        <Route path="/malware/ramsomware" element={<Ramsomware />} /> 
        <Route path="/malware/Gusano" element={<Gusano />} />
        <Route path="/malware/Spyware" element={<Spyware />} />
        <Route path="/malware/Adware" element={<Adware />} />
        <Route path="/malware/Rootkit" element={<Rootkit />} />
        <Route path="/malware/Keylogger" element={<Keylogger />} />
        <Route path="/malware/Bootnet" element={<Bootnet />} />
        <Route path="/malware/Backdoor" element={<Backdoor />} />
        <Route path="/malware/Exploit" element={<Exploit />} />
        <Route path="/malware/Fileless" element={<Fileless />} />
        <Route path="/malware/Scareware" element={<Scareware />} />

        <Route path="/footer" element={<Footer />} />
        <Route path='/tiposMalware' element={<TiposMalware />} />
        <Route path='/riesgos' element={<Riesgos />} />
        <Route path='/protegerme' element={<Protegerme />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;