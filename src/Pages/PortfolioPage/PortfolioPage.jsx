import React, { useState } from 'react';
import PortfolioCard from '../../Components/PortfolioCard/PortfolioCard';
import Title from '../../Components/Title/Title';
import './PortfolioPage.styles.css';
import Data from '../../Data/PortfolioData';
import Footer from '../../Components/Footer/Footer';
import TechSkills from '../../Components/TechSkills/TechSkills';
const PortfolioPage = () => {
  // const [showMore, setShowMore] = useState(false);
  return (
    <div className="portfolioPage">
      <section className="portfolioPage__projects">
        <Title name="Portfolio" />
        <div className="portfolioPage__items">
              {
                Data.map((item, index) => <PortfolioCard key={index} name={item.name} thumbnailUrl={item.thumbnailUrl} />
                )}
        </div>
          {/* <button onClick={() => setShowMore(!showMore)} className="items__moreBtn">
            {showMore ? 'less' : 'more'}
          </button> */}
          <button className="items__moreBtn">Swipe to see more <i class="fas fa-chevron-right"></i></button>
      </section>
      <TechSkills />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
