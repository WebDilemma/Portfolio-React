import React, { useState, useEffect } from 'react';
import Iphone from '../../Components/Iphone/Iphone';
import IphoneX from '../../Components/Iphone/IphoneX';
import Macbook from '../../Components/Macbook/Macbook';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Title from '../../Components/Title/Title';
import './AboutPage.styles.css';
import Footer from '../../Components/Footer/Footer';

const AboutPage = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 960);

  const updateMedia = () => {
    setMobile(window.innerWidth < 960);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div className="aboutpage">
      <Title name="about" />
      <div className="aboutpage__deviceContainer">{isMobile ? <IphoneX /> : <Macbook />}</div>
      <OurTeam />
      <Footer />
    </div>
  );
};

export default AboutPage;
