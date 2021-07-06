import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import "./AboutView.styles.css";

const AboutView = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 960);

  const updateMedia = () => {
    setMobile(window.innerWidth < 960);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <section className="about" id="about">
      {isMobile && <Title name="about" />}
      <div className="about__container">
        <div className="about__infoContainer">
          <div className="about__row">
            <div className="about__infoText">
              <p className="info__title">
                About <span className=""></span>
              </p>
              <p className="info__headline">
                We Build Things that Improve World
              </p>
              <p className="info__description">
                Hello, Web Dilemma is the place to help not only businesses
                adapt to new technology but also new developers to contribute to
                the world of tech using creative ideas! Because Everyone Is
                Unique!
              </p>
            </div>
            <div className="about__infoImg">
              <div className="about__infoImg__container">
                <img
                  className="about__infoImg--main"
                  src="https://picsum.photos/600/400"
                  alt="main"
                />
                <img
                  className="about__infoImg--bg"
                  src="https://picsum.photos/600/400"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="about__row">
            <div className="about__infoImg">
              <div className="about__infoImg__container">
                <img
                  className="about__infoImg--main"
                  src="https://picsum.photos/600/400"
                  alt="main"
                />
                <img
                  className="about__infoImg--bg"
                  src="https://picsum.photos/600/400"
                  alt=""
                />
              </div>
            </div>
            <div className="about__infoText">
              <p className="info__title">Our Team</p>
              <p className="info__headline">
                Developers with Exceptional Designing Skills
              </p>
              <p className="info__description">
                We're a team of 4 developers working at the core of Web Dilemma,
                Though We’re not limited to a few developers. We help new
                developers work on real projects and help them grind their
                skills to enter the market easily.
              </p>
            </div>
          </div>
        </div>
        <div className="about__seeMore">
          <div className="about__seeMoreLine">
            <Link to="/about">See More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;
