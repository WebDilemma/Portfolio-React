import React, { useEffect, useRef, useState } from 'react';
import './Navbar.styles.css';
import Logo from '../../Assets/wd_logo_nav.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const imgRef = useRef();
  const [showNav, setShowNav] = useState(false);
  // useEffect(() => {
  //   window.addEventListener('scroll', function () {
  //     const navbarLogo = imgRef;
  //     let value = window.scrollY;
  //     navbarLogo.current.style.right = `${value * 0.06}px`;
  //   });
  // });

  return (
    <nav className="navbar">
      <div className="navbar__logoContainer">
        <img ref={imgRef} id="logoImg" className="navbar__logoImg" src={Logo} alt="logo" />
      </div>
      <div className="navbar__burgerBtn" onClick={() => setShowNav(!showNav)}>
        <i class={showNav ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={showNav ? 'navbar__nav active' : 'navbar__nav'}>
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
        <div>
          <Link to="/contact">Let's talk</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
