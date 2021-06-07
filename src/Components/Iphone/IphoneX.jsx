import React from 'react';
import './IphoneX.styles.css';
import ChatBoard from '../Chat/ChatBoard';

const IphoneX = () => {
  return (
    <div className="temp-wrapper">
      <div className="px">
        <div className="px__body">
          <div className="px__body__cut"></div>
          <div className="px__body__speaker"></div>
          <div className="px__body__sensor"></div>

          <div className="px__body__mute"></div>
          <div className="px__body__up"></div>
          <div className="px__body__down"></div>
          <div className="px__body__right"></div>
        </div>

        <div className="px__screen">
          <div className="px__screen__">
            <div
              className="px__screen__frame"
              // style="background-image: url('https://img00.deviantart.net/10be/i/2016/132/c/4/instagram_gradient_wallpaper_by_jasonzigrino-da28exh.png')"
            >
              {/* <i className="fa fa-apple"></i> */}
              <ChatBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphoneX;
