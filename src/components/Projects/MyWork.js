import React from "react";
import WorkCard from "./WorkCard";
import quireLogo from "../../img/quireLogo.png";
import apiLogo from "../../img/gutenberg-api-transparent.png";
import styled from "styled-components";

const MyWork = () => {
  let iconReact = <Ireact className="fab fa-react"></Ireact>;
  let iconJs = <Ijs className="fab fa-js"></Ijs>;

  return (
    <Wrapper>
      <Title>My Projects</Title>
      <ProjectsWrapper>
        <WorkCard
          img={quireLogo}
          text="A note app me and my group Gutenberg did as a school assignment"
          url="http://gutenberg-quire.surge.sh/"
          alt="A project me and my group gutenberg did as a school assignment"
          style={quireLogoStyle}
          icon={iconJs}
        />

        <WorkCard
          img={apiLogo}
          text="A site that shows three different apis"
          url="http://gutenberg-api.surge.sh/"
          alt="http://gutenberg-api.surge.sh/"
          style={apiLogoStyle}
          icon={iconReact}
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

  @media (max-width: 400px) {
    height: 100%;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50%;
  width: 100%;

  @media (max-width: 400px) {
    height: 80%;
    width: 100vw;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const Title = styled.h1`
  align-self: center;
  justify-self: flex-start;
  margin: 0;
  font-size: 3rem;
`;

const Ijs = styled.i`
  color: yellow;
  font-size: 2rem;

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

const Ireact = styled.i`
  color: lightblue;
  font-size: 2rem;

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

// const quireLogoStyle = styled.img`
//   width: 330px;
//   margin: 0 auto;

//   @media (max-width: 400px) {
//     width: 50px;
//     height: 140px;
//   }
// `;

const quireLogoStyle = {
  width: "330px",
  margin: "0 auto",
};

const apiLogoStyle = {
  width: "200px",
  height: "143px",
  margin: "0 auto",
};

export default MyWork;
