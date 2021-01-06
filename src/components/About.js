import React from "react";
import profile from "../img/profile.jpg";

const About = () => {
  return (
    <div className="about-container" id="about">
      <section>
        <h1>Hi, nice to meet you!</h1>
        <div>
          <img src={profile} alt="profile pic of me" width="250" height="250" />
          <p>
            My name is Jesper Pettersson. I love learning new things and i
            ofcourse love to code. I'm a student who is currently learning
            React. In my freetime i like to work on some projects and be with my
            girlfriend.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
