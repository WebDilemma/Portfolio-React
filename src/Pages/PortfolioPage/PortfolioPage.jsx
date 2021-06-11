import React, { useState } from "react";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";
import Title from "../../Components/Title/Title";
import "./PortfolioPage.styles.css";
import Data from "../../Data/PortfolioData";
import Footer from "../../Components/Footer/Footer";
import TechSkills from "../../Components/TechSkills/TechSkills";
import Planets from "../../Components/Planets/Planets";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const PortfolioPage = () => {
  // const [showMore, setShowMore] = useState(false);
  return (
    <div className="portfolioPage">
      <Planets />
      <section className="portfolioPage__projects">
        <Title name="Portfolio" />
        <div className="portfolioPage__items">
          <Carousel infiniteLoop>
            {Data.map((item, index) => (
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
          {/* <div className="items__moreBtn">Swipe to see more <i class="fas fa-chevron-right"></i></div> */}
        </div>
      </section>
      <TechSkills />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
