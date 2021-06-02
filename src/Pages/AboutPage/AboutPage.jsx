import React from 'react';
import Macbook from '../../Components/Macbook/Macbook';
import Title from '../../Components/Title/Title';
import './AboutPage.styles.css';

const AboutPage = () => {
  return (
    <div>
      <Title name="about" />
      <Macbook />
    </div>
  );
};

export default AboutPage;
