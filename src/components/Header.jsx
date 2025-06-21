import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      setIsDark(false);
    }
  }, []);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>Soiled...</Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/music" onClick={closeMenu}>Music</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li>
            <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle Theme">
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
