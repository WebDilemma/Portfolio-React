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
        {/* <p
          className={
            showInfo ? "portfolioCard__title active" : "portfolioCard__title"
          }
        >
          {name}
        </p> */}
        {showInfo && (
          <div className="portfolioCard__info">
            <div className="portfolioCard__infoContainer">
              <div className="infoContainer__left">
                <div className="infoContainer__title">{name}</div>
                <br></br>
                <div className="infoContainer__decription">{description}</div>
                <div className="infoContainer__stackUsed">
                  <div>Stack:</div>

                  {stacks.map((stack) => (
                    <span key={stack} className="stackUsed__stackItem">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
              <div className="infoContainer__right">
                {githubRepoLink && (
                  <a href={githubRepoLink}>
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                )}
                {liveDemoLink && (
                  <a href={liveDemoLink}>
                    <i className="fa fa-globe" aria-hidden="true"></i>
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
