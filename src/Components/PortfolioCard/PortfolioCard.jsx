import React, { useState } from "react";
import "./PortfolioCard.styles.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const PortfolioCard = (props) => {
  const {
    thumbnailUrl,
    name,
    description,
    stacks,
    githubRepoLink,
    liveDemoLink,
  } = props;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="portfolioCard" onClick={() => setShowInfo(!showInfo)}>
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
        {showInfo && (
          <div className="portfolioCard__info">
            <div className="portfolioCard__infoContainer">
              <div className="infoContainer__title">{name}</div>
              <div className="infoContainer__stackUsed">
                Powered with&nbsp;<span>&#123;</span>
                {stacks.map((stack) => (
                  <img
                    alt="stack"
                    key={stack}
                    src={stack}
                    className="stackUsed__stackItem"
                  />
                ))}
                <span>&#125;</span>
              </div>
              <div className="infoContainer__buttonLinks">
                {githubRepoLink && (
                  <a
                    href={githubRepoLink}
                    className="infoContainer__buttonLink"
                  >
                    <i className="fa fa-github" aria-hidden="true"></i> Repo
                  </a>
                )}
                {liveDemoLink && (
                  <a href={liveDemoLink} className="infoContainer__buttonLink">
                    <i className="fa fa-globe" aria-hidden="true"></i> Link
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="showInfo__btn">
          {showInfo ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
