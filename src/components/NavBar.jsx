// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎵 MusicStore</h1>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <Link to="/category/rock">Rock</Link>
        <Link to="/category/pop">Pop</Link>
        <Link to="/category/jazz">Jazz</Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
