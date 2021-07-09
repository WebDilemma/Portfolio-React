import React from "react";
import "./TechCard.scss";

const TechCard = ({ logo, name }) => {
  return (
    <div className="techCard">
      <div className="techCard__container">
        <img className="techCard__logo" src={logo} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TechCard;
