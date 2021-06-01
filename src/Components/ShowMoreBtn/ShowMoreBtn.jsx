import React from 'react';
import './ShowMoreBtn.styles.css';

const ShowMoreBtn = () => {
  return (
    <div className="more">
      <div className="more__left"></div>
      <button className="more__button">More</button>
      <div className="more__right"></div>
    </div>
  );
};

export default ShowMoreBtn;
