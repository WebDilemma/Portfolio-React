import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import TeamMemberCard from "./TeamMemberCard";
import "./OurTeam.styles.css";
import TeamMembers from "../../Data/TeamMembers";

const OurTeam = () => {
  // api fetching for team data
  // const [teamData, setTeamData] = useState([]);
  // const url = "https://webdilemma4.herokuapp.com/api/team/list/";
  // const fetchTeam = () => {
  //   axios.get(url).then((res) => {
  //     setTeamData(res.data);
  //     console.log(teamData);
  //     setLoading(false);
  //   });
  // };

  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    setTeamData(TeamMembers);
  }, []);

  return (
    <section className="ourTeam">
      <Title name="Our Team" />
      <div className="ourTeam__members">
        {teamData.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            profilePic={member.profilePic}
            jobTitle={member.jobTitle}
            expertise={member.expertise}
            bio={member.bio}
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
