import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './TeamMemberCard.styles.css';

const TeamMemberCard = ({
  linkedinLink,
  name,
  jobTitle,
  profilePic,
  expertise,
  twitterLink,
  githubLink,
  websiteLink,
  instagramLink,
}) => {
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
            {githubLink && (
              <a rel="noreferrer" target="_blank" href={githubLink}>
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            )}
            {twitterLink && (
              <a rel="noreferrer" target="_blank" href={twitterLink}>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            )}
            {linkedinLink && (
              <a rel="noreferrer" target="_blank" href={linkedinLink}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            )}
            {instagramLink && (
              <a rel="noreferrer" target="_blank" href={instagramLink}>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            )}
            {websiteLink && (
              <a rel="noreferrer" target="_blank" href={websiteLink}>
                <i className="fa fa-globe" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
