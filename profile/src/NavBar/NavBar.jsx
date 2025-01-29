import React from 'react';
import './NavBar.css';  // You can create a separate CSS file for styling the NavBar

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about" className="nav-link">About Me</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#skills" className="nav-link">Technical Skills</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
