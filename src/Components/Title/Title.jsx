import React from 'react';
import './Title.styles.css';

const Title = ({ name }) => {
  return (
    <div className="title">
      {name} <span className="title__line"></span>
    </div>
  );
};

export default Title;
