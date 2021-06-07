import React from 'react';
import Planets from '../Planets/Planets';
import './Home.styles.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <Planets className="home__planets" />
      <div className="home__headline">Grow Like Hell</div>
      <div className="home__scroll">
        <p>Scroll to explore</p>
        <img
        className="home__scrollArrow"
          alt="scroll downwards"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADK0lEQVR4nO3dT6ilcxzH8Tn+TYy/kcafFKVslJKFhZKFFDE2trOd9WysptixYaEsbFiNhQUpFpqkKBaUQpSuoYYQSUgmvCzuuTn3+J3/59zn+1yfV93FfXqe3/P7/d51e85zF+fAgYjYx/AQvh/+PNj1fP738LV/nel6PqsadD2BVcHo74PBoNdrOqfrCcRuCVJMghSTIMUkSDEJUkyCFJMgxSRIMQlSTIIUkyDFJEgxCVJMghSTIMUkSDEJUkyCFJMgxSRIMQlSTIIUkyDFJEgxCVJMghSTIMUkSDEJUkyCFJMgxSRIMQlSTIIUkyDFJEgxCVJMghSTIMUkSDEJUkyCFJMgxSRIMQlSTIIUkyDFJEgxCVJMghSTIMUkSDEJUkyCFJMgxSRIMQlSTIIUkyDFJEgxCVJMghSTIMUkSDEJUkyCFJMgxSRIMXseBI/gB3yDI3t9/1mG34u4hdO4r+v5bBQGwxg7/sTRFcfcZcWxjg7ntOPLVcbrBXw3tod/4dgK460lCI4N5zJqa9nxegNHcHZs4X/j+JLjrRwEx4dzGHUWDywzXu/gfvw+vpl4YomxVgqCRxvz+AMPLzpWr+Fu/NLYjCcXHGfpIHi8cf/fcO9iq9kncBd+bmzKs5jrCXCZILYfLp5u3PdX3LPaqnoOt9v95LXjuXmiLBpkGOOZxv1+wp3rWVXP4Tbb34c+7kWcN+PauYPgXLzQuM+PuGO9q+o53IIzjc16FQenXDdXEFyAlxrjf4tbN7OqnsON+KKxaa/jwgnXzAyCg3ilMe5XuHmzq+o53IDPG5v3Fi5pnD81CC7CG43xTuOmvVlVz+EwPmps4ju4bOzciUFwMd5sjPMprtvbVfUcrsaHjc38AFeNnNcMgivwXuP6T3BNN6vqOVyOdyds6rXDc/4TZErM93Flt6vquSl/dj7D9Y3jh/Fx4/jbuLTr9ewLOIRTjU3emvPYKRzqeh37iu1H15cbmz3LayY8MseKcL72h7tJpn6ojDWw/frj+TlinDTjtUusickvCHfM9WIy1mgY5alGjLlf3ccG4LGRGAv/xzE2ACdwout5RMSm/QMqqrPz+Y9h/QAAAABJRU5ErkJggg=="
        />
        <p className="home__scroll__icon">
          <i className="fas fa-chevron-down"></i>
        </p>
      </div>
    </section>
  );
};

export default Home;
