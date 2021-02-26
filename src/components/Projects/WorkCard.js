import React, { useState } from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";

const WorkCard = ({ img, text, url, alt, imgStyle, icon }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Wrapper>
        <Img src={img} alt={alt} style={imgStyle} />
        <InfoCard text={text} url={url} icon={icon} />

        <BtnWrapper>
          <a target="_blank" rel="noreferrer" href={url}>
            <Button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Visit website{" "}
              {hover ? <i className="fas fa-arrow-right"></i> : ""}
            </Button>
          </a>
        </BtnWrapper>
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
    width: 150px;
    height: 190px;
  }
`;

const Img = styled.img`
  @media (max-width: 400px) {
    width: 140px !important;
    height: 100px !important;
  }
`;

const BtnWrapper = styled.div`
  width: inherit;
  height: 25%;
  /* margin-bottom: 2%; */

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  width: 160px;
  padding: 7px 7px;

  height: 42px;
  background: none;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 10px;
  color: rgb(229, 229, 229);
  outline: none;
  cursor: pointer;
  align-self: center;

  @media (max-width: 400px) {
    cursor: none;
    padding: 2px 2px;
    width: 100px;
    height: 30px;
    font-size: 12px;
    margin-bottom: 10%;
  }
`;

export default WorkCard;
