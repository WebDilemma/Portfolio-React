import React, { useState } from "react";
import "./PortfolioCard.styles.css";

const PortfolioCard = (props) => {
  const {
    thumbnailUrl,
    name,
    description,
    stacks,
    githubRepoLink,
    liveDemoLink,
  } = props;
  console.log(stacks);
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
                <div className="infoContainer__decription">{description}</div>
                <div className="infoContainer__stackUsed">
                  Stack:{" "}
                  {stacks.map((stack) => (
                    <span key={stack} className="stackUsed__stack">
                      {stack}
                    </span>
                  ))}
                  <span className="stackUsed__stack">React</span>
                </div>
              </div>
              <div className="infoContainer__right">
                {githubRepoLink && (
                  <a href={githubRepoLink}>
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                )}
                {liveDemoLink && (
                  <a href={liveDemoLink}>
                    <i class="fa fa-globe" aria-hidden="true"></i>
                  </a>
                )}
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
