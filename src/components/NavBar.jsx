import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎵 MusicStore</h1>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/categoria/rock">Rock</Link></li>
        <li><Link to="/categoria/pop">Pop</Link></li>
        <li><Link to="/categoria/jazz">Jazz</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
