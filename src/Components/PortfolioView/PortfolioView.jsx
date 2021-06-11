import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import ShowMoreBtn from "../ShowMoreBtn/ShowMoreBtn";
import Title from "../Title/Title";
import "./PortfolioView.styles.css";
import Data from "../../Data/PortfolioData";
import { Carousel } from "react-responsive-carousel";

const PortfolioView = () => {
  return (
    <section className="portfolioView" id="portfolio">
      <Title name="Latest Projects" />
      <div className="portfolioView__items">
        <Carousel infiniteLoop>
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
    </section>
  );
};

export default PortfolioView;
