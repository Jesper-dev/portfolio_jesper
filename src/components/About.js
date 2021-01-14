import React from "react";
import profile from "../img/profile.jpg";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper id="about">
      <Section>
        <Title>Hi, nice to meet you!</Title>
        <Wrapper2>
          <Image
            src={profile}
            alt="profile pic of me"
            width="350"
            height="350"
          />
          <Text>
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
          </Text>
        </Wrapper2>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  height: 700px;
  display: flex;
  justify-content: center;
  background-color: rgb(51, 51, 51);
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 1100px;
  margin-top: 4%;
`;

const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 70%;
  color: rgb(255, 255, 255);
  font-family: "Roboto Slab", serif;
`;

const Title = styled.h1`
  font-size: 2.2em;
  margin-top: 3%;
`;

const Text = styled.p`
  font-size: 1.2rem;
  width: 550px;
`;

const Image = styled.img`
  border-radius: 20px;
  box-shadow: 2px 2px 5px 5px black;
`;

export default About;
