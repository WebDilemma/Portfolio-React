import React from 'react';
import './ChatMessage.styles.css';
import logo from '../../Assets/wd_logo_circle.png';

const ChatMessage = ({ isReverse, message }) => {
  return (
    <div
      className={
        isReverse
          ? 'chat__conversation-board__message-container reversed'
          : 'chat__conversation-board__message-container'
      }
    >
      <div className="chat__conversation-board__message__person">
        <div className="chat__conversation-board__message__person__avatar">
          {isReverse ? (
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Monika Figi" />
          ) : (
            <img src={logo} alt="web dilemma" />
          )}
        </div>
        <span className="chat__conversation-board__message__person__nickname">Monika Figi</span>
      </div>
      <div className="chat__conversation-board__message__context">
        <div className="chat__conversation-board__message__bubble">
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
