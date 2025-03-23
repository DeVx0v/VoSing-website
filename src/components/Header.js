import React from 'react';
import './Header.css'; // Separate CSS for Header styling

function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul>
        <li><a href="#features">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="download-button">Download Now</button>
    </header>
  );
}

export default Header;
