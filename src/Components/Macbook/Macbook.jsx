import React from 'react';
import ChatBoard from '../Chat/ChatBoard';
import './Macbook.styles.css';

const Macbook = () => {
  return (
    <div className="macbook">
      <div className="screen">
        <div className="viewport">
          <ChatBoard />
        </div>
      </div>
      <div className="base"></div>
      <div className="notch"></div>
    </div>
  );
};

export default Macbook;
