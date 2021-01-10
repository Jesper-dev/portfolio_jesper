import React from "react";
import WorkCard from "./WorkCard";
import quireLogo from "../img/quireLogo.png";

const MyWork = () => {
  return (
    <div className="work-container">
      <h1>My Projects</h1>
      <div className="projects">
        <WorkCard img={quireLogo} />
      </div>
    </div>
  );
};

export default MyWork;
