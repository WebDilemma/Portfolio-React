import React from 'react';
import './AboutView.styles.css';

const AboutView = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__infoContainer">
          <div className="about__row">
            <div className="about__infoText">
              <p className="info__title">
                About <span className=""></span>
              </p>
              <p className="info__headline">
                Ambitious designs for&nbsp;<span>Interior Project.</span>
              </p>
              <p className="info__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum sunt eveniet ratione minima at
                voluptatem modi nulla reiciendis ad quae, similique repellat commodi, hic tempora quos quam, ullam quis.
              </p>
            </div>
            <div className="about__infoImg">
              <img src="https://picsum.photos/600/400" alt="main" />
              <img className="about__infoImg--bg" src="https://picsum.photos/600/400" alt="" />
            </div>
          </div>
          <div className="about__row">
            <div className="about__infoImg">
              <img src="https://picsum.photos/600/400" alt="" />
              <img className="about__infoImg--bg" src="https://picsum.photos/600/400" alt="" />
            </div>
            <div className="about__infoText">
              <p className="info__title">- About</p>
              <p className="info__headline">
                Ambitious designs for&nbsp;<span>Interior Project.</span>
              </p>
              <p className="info__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum sunt eveniet ratione minima at
                voluptatem modi nulla reiciendis ad quae, similique repellat commodi, hic tempora quos quam, ullam quis.
              </p>
            </div>
          </div>
        </div>
        <div className="about__seeMore">
          <a href="">See more</a>
        </div>
      </div>
    </section>
  );
};

export default AboutView;
