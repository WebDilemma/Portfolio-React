import React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import Title from '../Title/Title';
import './PortfolioView.styles.css';
import Data from '../../Data/PortfolioData';

const PortfolioView = () => {
  return (
    <section className="portfolioView" id="portfolio">
      <Title name="Portfolio" />
      <div className="portfolioView__items">
        {Data.map(
          (item, index) => index < 3 && <PortfolioCard key={index} name={item.name} thumbnailUrl={item.thumbnailUrl} />
        )}
      </div>
      <ShowMoreBtn link="/portfolio" />
    </section>
  );
};

export default PortfolioView;
