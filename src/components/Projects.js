import React from "react";
import styled from "styled-components";
import GithubApi from "./GithubApi";
import MyWork from "./MyWork";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <MyWork />
      <GithubApi />
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  height: 80vh;
`;

export default Projects;
