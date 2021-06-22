import React from "react";
import "./MobileFooter.styles.css";

const MobileFooter = () => {
  return (
    <div className="mobileFooter">
      <div className="mobileFooter__follow">Follow web dilemma</div>
      <div className="mobileFooter__socialLinks">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/WebDilemma"
        >
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <a href="mailto:abc@example.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
      <div className="mobileFooter__policy">
        <p>
          <a href="/about">about</a>
        </p>
        <p>Terms & Conditon</p>
        <p>Policy</p>
      </div>
      <div className="mobileFooter__credits">
        &#47;&#47; 2021 Web Dilemma All rights reserved
      </div>
    </div>
  );
};

export default MobileFooter;
