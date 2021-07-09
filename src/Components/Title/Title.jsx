import React from "react";
import "./Title.scss";

const Title = ({ name }) => {
  return (
    <div className="title">
      <p>
        <span className="title__line"></span>

        {name}
        <span className="title__line"></span>
      </p>
    </div>
  );
};

export default Title;
