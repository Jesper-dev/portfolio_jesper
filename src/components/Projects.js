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
  height: 80vh;
`;

export default Projects;
