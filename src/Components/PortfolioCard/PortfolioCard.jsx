import React from 'react';
import './PortfolioCard.styles.css';

const PortfolioCard = ({ thumbnailUrl, name }) => {
  return (
    <div className="portfolioCard">
      <div className="portfolioCard__container">
        <img className="portfolioCard__thumbnail" src={thumbnailUrl} alt={name} />
        <p className="portfolioCard__title">{name}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
