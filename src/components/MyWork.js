import React from "react";
import WorkCard from "./WorkCard";
import quireLogo from "../img/quireLogo.png";
import apiLogo from "../img/gutenberg-api-transparent.png";

const MyWork = () => {
  return (
    <div className="work-container">
      <h1>My Projects</h1>
      <div className="projects">
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
          className="apiLogo"
        />
      </div>
    </div>
  );
};

const img2Style = {
  width: "220px",
  height: "200px",
};

export default MyWork;
