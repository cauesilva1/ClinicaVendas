import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WaitScrean from './pages/WaitScrean';
import Relatorio from './pages/Relatorios';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Relatorio" element={<Relatorio />} />
        <Route path="/" element={<WaitScrean />} />

      </Routes>
    </Router>
  );
}

export default App;
