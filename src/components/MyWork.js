import React from "react";
import Work from "./Work";
import quire from "../img/quire.jpg";

const MyWork = () => {
  return (
    <div className="work-container">
      <h1>My Projects</h1>
      <div className="projects">
        <Work img={quire} />
      </div>
    </div>
  );
};

export default MyWork;
