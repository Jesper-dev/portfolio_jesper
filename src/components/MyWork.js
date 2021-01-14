import React from "react";
import WorkCard from "./WorkCard";
import quireLogo from "../img/quireLogo.png";
import apiLogo from "../img/gutenberg-api-transparent.png";
import styled from "styled-components";

const MyWork = () => {
  return (
    <Wrapper>
      <Title>My Projects</Title>
      <ProjectsWrapper>
        <WorkCard
          img={quireLogo}
          text="A note app me and my group Gutenberg did as a school assignment"
          url="http://gutenberg-quire.surge.sh/"
          alt="A project me and my group gutenberg did as a school assignment"
        />
        <WorkCard
          img={apiLogo}
          text="A site that shows three different apis"
          url="http://gutenberg-api.surge.sh/"
          alt="http://gutenberg-api.surge.sh/"
          style={apiLogoStyle}
        />
      </ProjectsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80%;
  width: 80%;
  margin: 5% auto;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50%;
  width: 100%;
`;

const Title = styled.h1`
  align-self: center;
  justify-self: flex-start;
  margin: 0;
`;

const apiLogoStyle = {
  width: "400px",
  height: "220px",
};

export default MyWork;
