import React from "react";
import "./HomePage.styles.css";
import Home from "../../Components/Home/Home";
import PortfolioView from "../../Components/PortfolioView/PortfolioView";
import AboutView from "../../Components/AboutView/AboutView";
import ContactView from "../../Components/ContactView/ContactView";
import Footer from "../../Components/Footer/Footer";
import BgAnim from "../../Components/Bg-Animation/BgAnim";

const HomePage = () => {
  return (
    <div className="homepage">
      <BgAnim style={{ zIndex: "-1" }} />

      <Home style={{ zIndex: "10" }} />
      <PortfolioView style={{ zIndex: "10" }} />
      {/* <TemplateView /> */}
      <AboutView />
      <ContactView />
      <Footer />
    </div>
  );
};

export default HomePage;
