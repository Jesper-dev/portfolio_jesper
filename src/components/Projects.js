import React from "react";
import styled from "styled-components";
import MyWork from "./MyWork";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <MyWork />
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  height: 50vh;
  @media (max-width: 400px) {
    height: 100vh;
    width: 100vw;
  }
`;

export default Projects;
