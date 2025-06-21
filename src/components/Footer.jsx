import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Soiled. All rights reserved.</p>
    <div className="socials">
      <a href="https://open.spotify.com/artist/3dljDIfRciTzD1amEPHyND" target="_blank" rel="noopener noreferrer">Spotify</a>
      <a href="https://instagram.com/me.soiled" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://www.youtube.com/@me.soiled" target="_blank" rel="noopener noreferrer">YouTube</a>
    </div>
  </footer>
);

export default Footer;
