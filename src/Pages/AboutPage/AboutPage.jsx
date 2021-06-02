import React from 'react';
import Iphone from '../../Components/Iphone/Iphone';
import Macbook from '../../Components/Macbook/Macbook';
import Title from '../../Components/Title/Title';
import './AboutPage.styles.css';

const AboutPage = () => {
  return (
    <div>
      <Title name="about" />
      <Macbook />
      <Iphone />
    </div>
  );
};

export default AboutPage;
