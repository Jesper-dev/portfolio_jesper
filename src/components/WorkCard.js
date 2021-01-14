import React, { useState } from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";

const imgHoverStyle = {
  opacity: "50%",
};

const WorkCard = ({ img, text, url, alt, className }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Wrapper
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        style={hover ? { imgHoverStyle } : null}
      >
        {hover && <InfoCard text={text} url={url} />}
        <img className={className} src={img} alt={alt} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: rgb(76, 76, 76);
  border: 1px solid rgb(4, 0, 255);
  border-radius: 30px;
  width: 400px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default WorkCard;
