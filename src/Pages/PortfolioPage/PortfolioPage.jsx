import React, { useState } from 'react';
import PortfolioCard from '../../Components/PortfolioCard/PortfolioCard';
import Title from '../../Components/Title/Title';
import './PortfolioPage.styles.css';
import Data from '../../Data/PortfolioData';
import Footer from '../../Components/Footer/Footer';
import TechSkills from '../../Components/TechSkills/TechSkills';
const PortfolioPage = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <section>
        <Title name="Portfolio" />
        <div className="portfolioPage__items">
          {showMore
            ? Data.map((item, index) => <PortfolioCard name={item.name} thumbnailUrl={item.thumbnailUrl} />)
            : Data.slice(0, 3).map((item, index) => (
                <PortfolioCard name={item.name} thumbnailUrl={item.thumbnailUrl} />
              ))}

          <button onClick={() => setShowMore(!showMore)} className="items__moreBtn">
            {showMore ? 'less' : 'more'}
          </button>
        </div>
      </section>
      <TechSkills />
      <Footer />
    </>
  );
};

export default PortfolioPage;
