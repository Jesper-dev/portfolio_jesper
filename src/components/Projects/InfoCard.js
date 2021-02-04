import React, { useState } from "react";
import styled from "styled-components";

const InfoCard = ({ text, url, icon }) => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <Text>{text}</Text>

      <a target="_blank" rel="noreferrer" href={url}>
        <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Visit website {hover ? <i className="fas fa-arrow-right"></i> : ""}
        </Button>
      </a>
      <IconWrapper>{icon}</IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 160px;

  @media (max-width: 400px) {
    height: inherit;
    width: inherit;
  }
`;

const Text = styled.p`
  color: rgb(229, 229, 229);
  width: 270px;
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 100%;

  @media (max-width: 400px) {
    font-size: 1rem;
    width: 150px;
    margin: 0;
  }
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

  @media (max-width: 400px) {
    cursor: none;
    padding: 2px 2px;
    width: 120px;
    height: 35px;
    font-size: 16px;
    margin-top: 10%;
  }
`;

const IconWrapper = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 400px) {
    height: 20px;
  }
`;

export default InfoCard;
