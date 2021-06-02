import React from 'react';
import './Title.styles.css';

const Title = ({ name }) => {
  return (
    <div className="title">
      <p>
        {name}
        <span className="title__line"></span>
      </p>
    </div>
  );
};

export default Title;
