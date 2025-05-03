import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎵 MusicStore</h1>
      <ul className="nav-links">
        <li><a href="#">Início</a></li>
        <li><a href="#">Catálogo</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
