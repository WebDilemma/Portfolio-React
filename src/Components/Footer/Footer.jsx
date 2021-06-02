import React from 'react';
import './Footer.styles.css';
import Logo from '../../Assets/wd_logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__logo">
        <img className="footer__logoImg" src={Logo} alt="logo" />
      </div>
      <div className="footer__navLinks">
        <p>
          <b>Navigate</b>
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>Templates</li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer__socialMedia">
        <p>
          <b>Social Media</b>
        </p>
        <ul>
          <li>Insta</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className="footer__about">
        <p>
          <b>About</b>
        </p>
        <ul>
          <li>Our Team</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="footer__address"> L.D College of Engineering, Navarangpura, Ahmedabad- Gujarat.</div>
      <div className="footer__talkBtn">
        <Link to="/contact">
          <div>Lets talk</div>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
