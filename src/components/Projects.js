import React from "react";
import GithubApi from "./GithubApi";
import MyWork from "./MyWork";

const Projects = () => {
  return (
    <div className="projects-container">
      <MyWork />
      <GithubApi />
    </div>
  );
};

export default Projects;
