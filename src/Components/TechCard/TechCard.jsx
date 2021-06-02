import React from 'react';
import './TechCard.styles.css';

const TechCard = ({ logo, name }) => {
  return (
    <div className="techCard">
      <div className="techCard__container">
        <img src={logo} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TechCard;
