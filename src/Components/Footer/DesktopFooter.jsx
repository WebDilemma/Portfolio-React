import React from "react";
import "./DesktopFooter.styles.css";
import Logo from "../../Assets/wd_logo.png";
import { Link } from "react-router-dom";

const DesktopFooter = () => {
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
          <li>
            <Link to="/about">About</Link>
          </li>
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
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/WebDilemma"
            >
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="mailto:abc@example.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
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
      <div className="footer__address">
        <i
          className="fa fa-map-marker"
          style={{ color: "red" }}
          aria-hidden="true"
        ></i>{" "}
        L.D College of Engineering, Navarangpura, Ahmedabad- Gujarat.
      </div>
      <div className="footer__talkBtn">
        <Link to="/contact">
          <div>Lets talk</div>
        </Link>
      </div>
    </section>
  );
};

export default DesktopFooter;
