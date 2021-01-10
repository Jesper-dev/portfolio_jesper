import React from "react";
import profile from "../img/profile.jpg";

const About = () => {
  return (
    <div className="about-container" id="about">
      <section>
        <h1>Hi, nice to meet you!</h1>
        <div>
          <img src={profile} alt="profile pic of me" width="350" height="350" />
          <p>
            My name is Jesper Pettersson. I'm currently studying to become a
            front-end developer at KYH in Stockholm. When I was a teen I found
            out that you could code your own games so I wanted to try that. I
            was trying to learn game development by myself but it did not go my
            way, so my fun in programming faded.
            <br /> <br /> But after i was done with school i started working and
            after a year I wanted to study something again and then I found
            front-end development. From the start I knew very little about
            programming and web development, I thought we would learn C# at KYH
            because I had very small idea what front-end development was.
            Nowadays I know alot more. <br /> <br />
            You can watch my projects down below and also see my github repos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
