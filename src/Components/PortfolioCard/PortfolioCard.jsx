import React, { useState } from "react";
import "./PortfolioCard.styles.css";

const PortfolioCard = ({ thumbnailUrl, name }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="portfolioCard">
      <div className="portfolioCard__container">
        <div className="portfolioCard__thumbnailContainer">
          <img
            className={
              showInfo
                ? "portfolioCard__thumbnail active"
                : "portfolioCard__thumbnail"
            }
            src={thumbnailUrl}
            alt={name}
          />
        </div>
        <p
          className={
            showInfo ? "portfolioCard__title active" : "portfolioCard__title"
          }
        >
          {name}
        </p>
        {showInfo && (
          <div className="portfolioCard__info">
            <div className="portfolioCard__infoContainer">
              <div className="infoContainer__left">
                <div className="infoContainer__title">{name}</div>
                <div className="infoContainer__decription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  enim, odit aperiam debitis itaque eveniet vero dolores culpa
                  iusto nesciunt natus veniam quas, saepe praesentium maxime
                  molestiae nisi magnam est.
                </div>
                <div className="infoContainer__stackUsed">
                  Stack: <span className="stackUsed__stack">Djano</span>
                  <span className="stackUsed__stack">React</span>
                </div>
              </div>
              <div className="infoContainer__right">
                <a href="#">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        )}
        <span
          className="portfolioCard__more"
          onClick={() => setShowInfo(!showInfo)}
        >
          <i class={showInfo ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
        </span>
      </div>
    </div>
  );
};

export default PortfolioCard;
