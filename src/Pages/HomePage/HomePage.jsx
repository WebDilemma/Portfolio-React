import React from 'react';
import './HomePage.styles.css';
import Home from '../../Components/Home/Home';
import PortfolioView from '../../Components/PortfolioView/PortfolioView';
// import TemplateView from '../../Components/TemplateView/TemplateView';
import AboutView from '../../Components/AboutView/AboutView';
import ContactView from '../../Components/ContactView/ContactView';

const HomePage = () => {
  return (
    <div className="homepage">
      <Home />
      <PortfolioView  />
      {/* <TemplateView /> */}
      <AboutView />
      <ContactView />
    </div>
  );
};

export default HomePage;
