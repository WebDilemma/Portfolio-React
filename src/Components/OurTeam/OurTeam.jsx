import React from 'react';
import Title from '../Title/Title';
import TeamMemberCard from './TeamMemberCard';
import './OurTeam.styles.css';
import TeamMembers from '../../Data/TeamMembers';

const OurTeam = () => {
  return (
    <section className="ourTeam">
      <Title name="Our Team" />
      <div className="ourTeam__members">
        {TeamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            profilePic={member.profilePic}
            jobTitle={member.jobTitle}
            expertise={member.expertise}
            twitterLink={member.twitterLink}
            websiteLink={member.websiteLink}
            githubLink={member.githubLink}
            instagramLink={member.instagramLink}
            linkedinLink={member.linkedinLink}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
