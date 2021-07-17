import React, { useState, useEffect } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Title from "../Title/Title";
import "./PortfolioView.scss";
import Data from "../../Data/PortfolioData";
import Skeleton from "@material-ui/lab/Skeleton";
import { Carousel } from "react-responsive-carousel";

const PortfolioView = () => {
  return (
    <section className="portfolioView" id="portfolio">
      <div className="content-wrapper">
        <Title name="Latest Projects" />
        <br />
        <br />
        <br />
        <div className="portfolioView__items">
          <Carousel
            showThumbs={false}
            autoPlay={false}
            stopOnHover={true}
            infiniteLoop
            interval={10000}
          >
            {Data.slice(0, 3).map((item, index) => (
              <PortfolioCard
                key={index}
                name={item.name}
                thumbnailUrl={item.thumbnailUrl}
                description={item.description}
                stacks={item.stacks}
                githubRepoLink={item.githubRepoLink}
                liveDemoLink={item.liveDemoLink}
              />
            ))}
          </Carousel>
        </div>
        {/* <ShowMoreBtn link="/portfolio" /> */}
      </div>
    </section>
  );
};

export default PortfolioView;
