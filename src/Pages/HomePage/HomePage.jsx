import React from 'react';
import './HomePage.styles.css';
import Home from '../../Components/Home/Home';
import PortfolioView from '../../Components/PortfolioView/PortfolioView';
import TemplateView from '../../Components/TemplateView/TemplateView';

const HomePage = () => {
  return (
    <div className="homepage">
      <Home className="homepage__home" />
      <PortfolioView />
      <TemplateView />
    </div>
  );
};

export default HomePage;
