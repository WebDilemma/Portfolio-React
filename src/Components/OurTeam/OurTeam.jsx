import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import TeamMemberCard from "./TeamMemberCard";
import "./OurTeam.styles.css";
import axios from "axios";
// import TeamMembers from "../../Data/TeamMembers";

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://webdilemma4.herokuapp.com/api/team/list/";

  const fetchTeam = () => {
    axios.get(url).then((res) => {
      setTeamData(res.data);
      console.log(teamData);
      setLoading(false);
    });
  };

  useEffect(() => {
    return fetchTeam();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="ourTeam">
      <Title name="Our Team" />
      <div className="ourTeam__members">
        {teamData.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            profilePic={member.user.img}
            jobTitle={member.job_title}
            expertise={member.expertise}
            twitterLink={member.user.twitter_handle}
            websiteLink={member.user.websiteLink}
            githubLink={member.user.github_link}
            instagramLink={member.user.instagram_profile_link}
            linkedinLink={member.user.linked_in_link}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
