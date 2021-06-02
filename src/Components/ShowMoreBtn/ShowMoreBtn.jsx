import React from 'react';
import { Link } from 'react-router-dom';
import './ShowMoreBtn.styles.css';

const ShowMoreBtn = ({ link }) => {
  return (
    <div className="more">
      <div className="more__left"></div>
      <Link to={link}>
        <button className="more__button">More</button>
      </Link>
      <div className="more__right"></div>
    </div>
  );
};

export default ShowMoreBtn;
