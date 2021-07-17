import React, { useState } from "react";
import "./TeamMemberCard.scss";

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
  bio,
}) => {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <div className="teamMemberCard">
      <div
        className="teamMemberCard__container"
        onClick={() => setMoreInfo(!moreInfo)}
      >
        <div
          className={
            moreInfo ? "teamMemberCard__face1 active" : "teamMemberCard__face1"
          }
        >
          <div className="teamMemberCard__imgContainer">
            <img
              className="teamMemberCard__profileImg"
              src={profilePic}
              alt={name}
            />
          </div>
          <div
            className={
              moreInfo ? "teamMemberCard__name active" : "teamMemberCard__name"
            }
          >
            <p>{name}</p>
            <p className="teamMemberCard__jobTitle">
              &#60;{jobTitle} &#47;&#62;
            </p>
          </div>
        </div>
        {/* <div className="teamMemberCard__infoContainer">
          <p className="teamMemberCard__jobTitle">{jobTitle}</p>
        </div> */}
        {moreInfo && (
          <div className="teamMemberCard__face2">
            <div className="teamMemberCard__infoContainer">
              <div className="teamMemberCard__bio">
                {/* <div className="teamMemberCard__bioTitle">Bio</div> */}
                <p>{bio}</p>
              </div>
              <div className="teamMemberCard__expertise">
                <p>Expertise:</p>
                <div className="expertise__stacks">
                  {expertise.map((item, index) => (
                    <img
                      key={index}
                      className="stacks__tech"
                      src={item}
                      alt="tech"
                    />
                  ))}
                </div>
              </div>
            </div>
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
        )}
        <div className="showMore__btn">
          <i
            className={
              moreInfo
                ? "fas fa-chevron-circle-down"
                : "fas fa-chevron-circle-up"
            }
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
