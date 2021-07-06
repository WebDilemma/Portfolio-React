import React from "react";
import Planets from "../Planets/Planets";
import "./Home.styles.css";
import BgAnim from "../Bg-Animation/BgAnim";

const Home = () => {
  return (
    <section className="home" id="home">
      <BgAnim />
      <Planets className="home__planets" />
      <div className="home__headline">
        <p>Grow</p>
        <p>Like</p>
        <p>Hell</p>
      </div>
    </section>
  );
};

export default Home;
