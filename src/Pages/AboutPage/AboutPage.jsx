import React, { useEffect, useState } from "react";
import Iphone from "../../Components/Iphone/Iphone";
import IphoneX from "../../Components/Iphone/IphoneX";
import Macbook from "../../Components/Macbook/Macbook";
import OurTeam from "../../Components/OurTeam/OurTeam";
import Title from "../../Components/Title/Title";
import Ipad from "../../Components/iPad/Ipad";
import "./AboutPage.styles.css";
import Footer from "../../Components/Footer/Footer";

const AboutPage = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 960);

  const updateMedia = () => {
    setMobile(window.innerWidth < 960);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="aboutpage">
      <section className="aboutpage__device">
        <Title name="about" />
        <div className="aboutpage__deviceContainer">
          {isMobile ? <IphoneX /> : <Ipad />}
        </div>
      </section>
      <OurTeam />
      <Footer />
    </div>
  );
};

export default AboutPage;
