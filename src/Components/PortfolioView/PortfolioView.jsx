import React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import Title from '../Title/Title';
import './PortfolioView.styles.css';

const PortfolioView = () => {
  return (
    <section className="portfolioView" id="portfolio">
      <Title name="Portfolio" />
      <div className="portfolioView__items">
        <PortfolioCard name="Todo List" thumbnailUrl="https://picsum.photos/600/400" />
        <PortfolioCard name="E com" thumbnailUrl="https://picsum.photos/500" />
        <PortfolioCard name="Instagram" thumbnailUrl="https://picsum.photos/1280/720" />
      </div>
      <ShowMoreBtn />
    </section>
  );
};

export default PortfolioView;
