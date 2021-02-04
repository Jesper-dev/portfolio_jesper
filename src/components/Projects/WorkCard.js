import React from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";

const WorkCard = ({ img, text, url, alt, style, icon }) => {
  return (
    <>
      <Wrapper>
        <Img src={img} alt={alt} style={style} />
        <InfoCard text={text} url={url} icon={icon} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: rgb(76, 76, 76);
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 1px 1px 2px 2px black;
  width: 330px;
  height: 330px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  @media (max-width: 400px) {
    width: 200px;
    height: 230px;
  }
`;

const Img = styled.img`
  @media (max-width: 400px) {
    width: 150px !important;
    height: 100px !important;
  }
`;

export default WorkCard;
