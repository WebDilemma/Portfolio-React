import React from "react";
import TechCard from "../TechCard/TechCard";
import Title from "../Title/Title";
import { ExpertInTech, LearningTech } from "../../Data/TechSkills";
import "./TechSkills.scss";

const TechSkills = () => {
  return (
    <section className="skills">
      <Title name="Skills" />
      <br />
      <br />
      <br />
      <div className="skills__container">
        {ExpertInTech.map((item) => (
          <TechCard key={item.name} name={item.name} logo={item.logo} />
        ))}
      </div>
      {/* <p className="skills__subHead">Learning:</p> */}
      <div className="skills__container">
        {LearningTech.map((item) => (
          <TechCard key={item.name} name={item.name} logo={item.logo} />
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
