import React, { useRef, useState } from "react";
import "./Navbar.styles.css";
import Logo from "../../Assets/wd_logo_nav.png";
import { Link, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  const navRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const handleNavbar = () => {
    setShowNav(!showNav);
  };
  console.log(history);

  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#2ecc72" };
    } else {
      return { color: "#fff" };
    }
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar__logoContainer">
        <a href="/" style={currentTab(history, "/")}>
          <img id="logoImg" className="navbar__logoImg" src={Logo} alt="logo" />
        </a>
      </div>
      <div className="navbar__burgerBtn" onClick={handleNavbar}>
        <i className={showNav ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={showNav ? "navbar__nav active" : "navbar__nav"}>
        <Link to="/" style={currentTab(history, "/")} onClick={handleNavbar}>
          <li>Home</li>
        </Link>
        <Link
          to="/portfolio"
          style={currentTab(history, "/portfolio")}
          onClick={handleNavbar}
        >
          <li>Portfolio</li>
        </Link>

        <Link
          to="/about"
          style={currentTab(history, "/about")}
          onClick={handleNavbar}
        >
          <li>about</li>
        </Link>
        <Link
          className="navbar__specialCase"
          style={currentTab(history, "/contact")}
          to="/contact"
          onClick={handleNavbar}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
