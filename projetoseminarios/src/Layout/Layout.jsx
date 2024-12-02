import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Sidebar global */}
      <main style={{ flexGrow: 1, padding: '16px' }}>
        <Outlet /> {/* Renderiza o conteúdo da rota atual */}
      </main>
    </div>
  );
};

export default Layout;
