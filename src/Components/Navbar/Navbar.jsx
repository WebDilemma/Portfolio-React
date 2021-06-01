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
        <li>Home</li>
        <li>Portfolio</li>
        <li>Templates</li>
        <li>Contact</li>
      </ul>
      <div className="navbar__contactBtb">Let's talk</div>
    </nav>
  );
};

export default Navbar;
