import React from 'react';
import './Navbar.styles.css';
import Logo from '../../Assets/wd_logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logoContainer">
        <img className="navbar__logoImg" src={Logo} alt="logo" />
        <div className="navbar__circle"></div>
      </div>
      <ul className="navbar__nav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#">Templates</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
      </ul>
      <button className="navbar__contactBtb">
        <a href="#contact">Let's talk</a>
      </button>
    </nav>
  );
};

export default Navbar;
