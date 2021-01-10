import React, { useState } from "react";
import InfoCard from "./InfoCard";

const textQuire =
  "A note app me and my group Gutenberg did as a school assignment";

const urlQuire = "http://gutenberg-quire.surge.sh/";

const imgHoverStyle = {
  opacity: "10%",
};

const WorkCard = ({ img }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        style={hover ? { imgHoverStyle } : null}
        className="workCard-container"
      >
        {hover && <InfoCard text={textQuire} url={urlQuire} />}
        <img
          className="img"
          src={img}
          alt="The project Quire that i was a part of."
        />
      </div>
    </>
  );
};

export default WorkCard;
