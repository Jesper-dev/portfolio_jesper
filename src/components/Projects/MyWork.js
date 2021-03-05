import React, { useState } from "react";
import WorkCard from "./WorkCard";
import quireLogo from "../../img/quireLogo.png";
import apiLogo from "../../img/APICentral2.png";
import culcitra from "../../img/culcitra.png";
import photoportfolio from "../../img/photoportfolio.png";
import styled from "styled-components";

const MyWork = () => {
  let iconReact = <Ireact className="fab fa-react"></Ireact>;
  let iconJs = <Ijs className="fab fa-js"></Ijs>;

  const [showCard, setShowCard] = useState(false);
  const [cardShowing, setCardShowing] = useState(false);
  let array = [];

  const onClickBtn = (e) => {
    setShowCard(true);
  };

  return (
    <Wrapper>
      <Title>My Projects</Title>
      <ProjectsWrapper>
        <WorkCard
          img={quireLogo}
          text="A note app me and my group Gutenberg did as a school assignment"
          url="http://gutenberg-quire.surge.sh/"
          alt="Showing the logo of Quire"
          imgStyle={quireLogoStyle}
        />

        <WorkCard
          img={apiLogo}
          text="A site that shows three different apis that me and my friend Jon made"
          url="http://gutenberg-api.surge.sh/"
          alt="Showing the logo of API-central"
          imgStyle={apiLogoStyle}
        />

        <WorkCard
          img={culcitra}
          text="Culcitra is a card game me and my friend Jon made to learn React"
          url="http://culcitra.surge.sh/"
          alt="Showing logo of Culcitra"
          imgStyle={culcitraLogoStyle}
        />
        <WorkCard
          img={photoportfolio}
          text="This is a project i made for learning Vue. This site shows how a photo portfolio can be made."
          url="http://photoportfolio.surge.sh/"
          alt="Showing logo of Culcitra"
          imgStyle={culcitraLogoStyle}
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
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 100%;

  @media (max-width: 400px) {
    height: 100vh;
    width: 100vw;
    flex-flow: row wrap;
    align-items: center;
  }
`;

const Title = styled.h1`
  align-self: center;
  justify-self: flex-start;
  margin: 0;
  font-size: 3rem;

  @media (max-width: 400px) {
    font-size: 2.9rem;
  }
`;

const Ijs = styled.i`
  color: yellow;
  font-size: 2rem;
  margin-top: 3%;

  @media (max-width: 400px) {
    font-size: 0.9rem;
    margin-top: 2%;
  }
`;

const Ireact = styled.i`
  color: lightblue;
  font-size: 2rem;

  @media (max-width: 400px) {
    font-size: 0.9rem;
    margin-top: 2%;
  }
`;

const quireLogoStyle = {
  width: "330px",
  margin: "0 auto",
};

const culcitraLogoStyle = {
  width: "320px",
  height: "140px",
  margin: "0 auto",
};

const apiLogoStyle = {
  width: "320px",
  height: "150px",
  margin: "0 auto",
};

export default MyWork;
