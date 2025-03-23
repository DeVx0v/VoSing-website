import React from 'react';
import './Footer.css'; // Separate CSS for Footer styling

function Footer() {
  return (
    <footer className="App-footer">
      <p>&copy; 2025 VoSing. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#contact">Contact</a> | <a href="#privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
