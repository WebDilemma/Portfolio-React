import React, { useEffect, useRef, useState } from 'react';
import './Navbar.styles.css';
import Logo from '../../Assets/wd_logo_nav.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();
  const [showNav, setShowNav] = useState(false);
  const navScroll = () => {
    const navbar = navRef;
    let value = window.scrollY;
    if (window.innerWidth < 960) return;
    // navbar.current.style.transform = `translateX(${value * -0.01}px)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', navScroll);
    return () => window.removeEventListener('scroll', navScroll);
  });

  const handleNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar__logoContainer">
        <img id="logoImg" className="navbar__logoImg" src={Logo} alt="logo" />
      </div>
      <div className="navbar__burgerBtn" onClick={handleNavbar}>
        <i className={showNav ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={showNav ? 'navbar__nav active' : 'navbar__nav'}>
        <Link to="/" onClick={handleNavbar}>
          <li>Home</li>
        </Link>
        <Link to="/portfolio" onClick={handleNavbar}>
          <li>Portfolio</li>
        </Link>

        <Link to="/about" onClick={handleNavbar}>
          <li>about</li>
        </Link>
        <Link className="navbar__specialCase" to="/contact" onClick={handleNavbar}>
          <li >Contact</li>
        </Link>
        
      </ul>
      <div className="navbar__contactBtb">
        <div>
          <Link to="/contact">Let's talk</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
