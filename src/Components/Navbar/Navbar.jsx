import React from 'react';
import './Navbar.styles.css';
import Logo from '../../Assets/wd_logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logoContainer">
        <img className="navbar__logoImg" src={Logo} alt="logo" />
        <div className="navbar__circle"></div>
      </div>
      <ul className="navbar__nav">
        <li>
          <a href="/">Home</a>
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
      <div className="navbar__contactBtb">
        <Link to="/contact">Let's talk</Link>
      </div>
    </nav>
  );
};

export default Navbar;
