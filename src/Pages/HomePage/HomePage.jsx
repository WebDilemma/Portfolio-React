import React from "react";
import "./HomePage.styles.css";
import Home from "../../Components/Home/Home";
import PortfolioView from "../../Components/PortfolioView/PortfolioView";
import AboutView from "../../Components/AboutView/AboutView";
import ContactView from "../../Components/ContactView/ContactView";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <Home />
      <PortfolioView />
      {/* <TemplateView /> */}
      <AboutView />
      <ContactView />
      <Footer />
    </div>
  );
};

export default HomePage;
