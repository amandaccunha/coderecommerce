import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import { CartProvider } from './context/cartContext'; // 🔁 Importe seu provider aqui

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* ✅ Agora o contexto está disponível para toda a app */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
