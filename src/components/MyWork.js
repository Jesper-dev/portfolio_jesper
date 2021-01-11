import React from "react";
import WorkCard from "./WorkCard";
import quireLogo from "../img/quireLogo.png";
import apiLogo from "../img/apicentral.png";

const textQuire =
  "A note app me and my group Gutenberg did as a school assignment";

const altQuire =
  "A project me and my group gutenberg did as a school assignment";

const textApi = "A site that shows three different apis";
const altApi = "A website that shows three different apis";

const urlQuire = "http://gutenberg-quire.surge.sh/";
const urlApi = "http://gutenberg-api.surge.sh/";

const MyWork = () => {
  return (
    <div className="work-container">
      <h1>My Projects</h1>
      <div className="projects">
        <WorkCard
          img={quireLogo}
          text={textQuire}
          url={urlQuire}
          alt={altQuire}
        />
        <WorkCard img={apiLogo} text={textApi} url={urlApi} alt={altApi} />
      </div>
    </div>
  );
};

export default MyWork;
