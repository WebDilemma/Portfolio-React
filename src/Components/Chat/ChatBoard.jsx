import React from 'react';
import './ChatBoard.styles.css';
import ChatMessage from './ChatMessage';
import logo from '../../Assets/wd_logo_circle.png';
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <>
      <div className="chat__header">
        <div className="chat__header__logo">
          <img className="chat__header__logoImg" src={logo} alt="logo" />
        </div>
        <div className="chat__header__container">
          <p className="chat__header__container__title">Web Dilemma</p>
          <p className="chat__header__container__status">online</p>
        </div>
        <div className="chat__header__actionBtn">
          <Link to="/contact">
            <img
              className="chat__header__actionBtn__img"
              src="https://img.icons8.com/material-sharp/24/ffffff/phone-disconnected.png"
              alt="phone"
            />
          </Link>
        </div>
        <div className="chat__header__actionBtn">
          <Link to="/">
            <img
              // className="chat__header__actionBtn__img"
              src="https://img.icons8.com/material-rounded/24/ffffff/menu-2.png"
              alt="phone"
            />
          </Link>
        </div>
      </div>
      <div className="--dark-theme" id="chat">
        <div className="chat__conversation-board">
          <ChatMessage message="What is Web Dilemma ?" isReverse />
          <ChatMessage message="Web Dilemma is Group of Web Developers aiming to help businesses go online by building interactive web sites where customers stop by and buy products." />
          <ChatMessage message="How can You Help me ?" isReverse="true" />
          <ChatMessage message="People are moving their businesses online after huge losses in pandemic as it doesn’t require any physical space to operate and you can reach to more potential customers. Basically, We will help you develop web sites for your startup or business using fresh designs and responsive tech." />
          <ChatMessage message="There are many web agencies, Why Should I hire You ?" isReverse="true" />
          <ChatMessage message="Because We’re not a Web Agency Who charges thousands of bucks for their services. We’re building a community of web developers, Who work because of their passion in the industry not doing 9 to 5 for a monthly salary. They invest not only their time and skill but also their heart on every project. So everytime you reach out to us you get something fresh and creative. We sure take time to build your site more engaging and user friendly, but It’ll be worth your time and money." />
          <ChatMessage
            message="Sounds Good. I sure want my site to be engaging to generate more and more leads from it!."
            isReverse
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
