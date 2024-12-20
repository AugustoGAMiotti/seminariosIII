import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Intro from './pages/intro';
import CustomBox from './components/CustomBox';
import Translate from './pages/Translate';
import Glossario from './API/Glossario';
import Learning from './pages/Learning';

function App() {
  return (
    <CustomBox>
      <BrowserRouter basename="/seminariosIII">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="intro" element={<Intro />} />
        <Route path="translate" element={<Translate />} />
        <Route path="glossario" element={<Glossario />} />
        <Route path="learning" element={<Learning />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </CustomBox>
  );
}

export default App;
