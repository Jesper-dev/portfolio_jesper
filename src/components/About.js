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
            Hello! My name is Jesper Pettersson. I'm currently studying to
            become a front-end developer at KYH in Stockholm. I have always had
            an interest in programming but it wasn't until recently, in 2020,
            that I decided to actually study programming and try to become a
            front-end developer. <br /> <br />
            I already have knowledge in JavaScript and React, but my next goal
            is to learn Redux and Python.
            <br /> <br />
            Down below you can find my finished work and I also have a Github
            page where you can find a list of my repos. I look forward to
            hearing from you and I hope we can achieve amazing things together!
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
  background-color: #222831;

  @media (max-width: 400px) {
    height: 100vh;
    width: 100vw;
    flex-flow: column nowrap;
  }
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 1100px;
  margin-top: 4%;

  @media (max-width: 400px) {
    width: 320px;
    height: 80vh;
  }
`;

const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 70%;
  color: rgb(255, 255, 255);
  font-family: "Roboto Slab", serif;

  @media (max-width: 400px) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: 2.2em;
  margin-top: 3%;

  @media (max-width: 400px) {
    font-size: 2em;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  width: 550px;

  @media (max-width: 400px) {
    width: 400px;
    font-size: 1rem;
  }
`;

const Image = styled.img`
  border-radius: 20px;
  box-shadow: 1px 1px 3px 3px grey;

  @media (max-width: 400px) {
    display: none;
  }
`;

export default About;
