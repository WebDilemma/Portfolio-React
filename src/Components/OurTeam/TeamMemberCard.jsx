import React from 'react';
import './TeamMemberCard.styles.css';

const TeamMemberCard = ({ name, jobTitle, profilePic, expertise, twitterLink, githubLink, websiteLink }) => {
  return (
    <div className="teamMemberCard">
      <div className="teamMemberCard__container">
        <div className="teamMemberCard__col">
          <div className="teamMemberCard__imgContainer">
            <img className="teamMemberCard__profileImg" src={profilePic} alt={name} />
          </div>
          <div className="teamMemberCard__infoContainer">
            <p className="teamMemberCard__name">{name}</p>
            <p className="teamMemberCard__jobTitle">{jobTitle}</p>
          </div>
        </div>
        <div className="teamMemberCard__col">
          <div className="teamMemberCard__socialLinks">
            <i class="fa fa-github" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-globe" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
