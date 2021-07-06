import React from "react";
import "./devices.scss";
import ChatBoard from "../Chat/ChatBoard";

function Ipad() {
  return (
    <div>
      <div className="marvel-device ipad silver">
        <div className="camera"></div>
        <div className="screen">
          <ChatBoard />
          <div className="text-box"></div>
        </div>
        <div className="home"></div>
      </div>
    </div>
  );
}

export default Ipad;
