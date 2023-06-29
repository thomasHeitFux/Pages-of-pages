import React, { useState } from 'react';
import './styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>WebMaster Solutions</h1>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="services">Servicios</a></li>
          <li><a href="portfolio">Portafolio</a></li>
          <li><a href="contact">Contacto</a></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;

