import React from "react";
import Planets from "../Planets/Planets";
import "./Home.scss";
import BgAnim from "../Bg-Animation/BgAnim";
import ScrollBtn from "../ScrollBtn/ScrollBtn";

const Home = () => {
  return (
    <section className="home" id="home">
      <Planets className="home__planets" />
      {/* <div className="scroll-btn">
        <ScrollBtn />
      </div> */}
      <div className="home__headline">
        <p>Grow</p>
        <p>Like</p>
        <p>Hell</p>
      </div>
    </section>
  );
};

export default Home;
