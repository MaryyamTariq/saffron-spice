import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">Saffron Spice</div>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/menu" onClick={() => setOpen(false)}>Menu</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>&#9776;</div>
      </nav>
    </header>
  );
}

export default Navbar;