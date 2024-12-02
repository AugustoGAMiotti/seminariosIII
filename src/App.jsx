import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Intro from './pages/intro';
import CustomBox from './components/CustomBox';

function App() {
  return (
    <CustomBox>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="intro" element={<Intro/>} />
        </Route>
      </Routes>
    </CustomBox>
  );
}

export default App;
