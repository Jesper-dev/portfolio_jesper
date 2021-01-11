import React, { useState } from "react";
import InfoCard from "./InfoCard";

const imgHoverStyle = {
  opacity: "50%",
};

const WorkCard = ({ img, text, url, alt }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        style={hover ? { imgHoverStyle } : null}
        className="workCard-container"
      >
        {hover && <InfoCard text={text} url={url} />}
        <img className="img" src={img} alt={alt} />
      </div>
    </>
  );
};

export default WorkCard;
