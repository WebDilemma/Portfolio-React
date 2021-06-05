import React from 'react';
import TechCard from '../TechCard/TechCard';
import Title from '../Title/Title';
import { ExpertInTech, LearningTech } from '../../Data/TechSkills';
import './TechSkills.styles.css';

const TechSkills = () => {
  return (
    <section className="skills">
      <Title name="Skills" />
      <div className="skills__container">
        {ExpertInTech.map((item) => (
          <TechCard key={item.name} name={item.name} logo={item.logo} />
        ))}
      </div>
      <p className="skills__subHead">Learning:</p>
      <div className="skills__container">
        {LearningTech.map((item) => (
          <TechCard key={item.name} name={item.name} logo={item.logo} />
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
