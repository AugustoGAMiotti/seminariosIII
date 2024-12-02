import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa o BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Envolva o App no BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
