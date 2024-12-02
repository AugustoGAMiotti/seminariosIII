import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home'; // Página Home
import About from './pages/About'; // Página Sobre

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Página inicial */}
        <Route path="about" element={<About />} /> {/* Página Sobre */}
      </Route>
    </Routes>
  );
}

export default App;
