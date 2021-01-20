import React from "react";
import styled from "styled-components";

const InfoCard = ({ text, url }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <a target="_blank" rel="noreferrer" href={url}>
        <Button onClick={() => console.log("Clicked")}>
          Visit website <i className="fas fa-arrow-right"></i>
        </Button>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(51, 51, 51);
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 400px;
  height: 220px;
  border: 1px solid black;
  border-radius: 30px;
  opacity: 90%;

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
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  width: 160px;
  padding: 7px 7px;
  margin-top: 10%;
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
    width: 140px;
    height: 35px;
    font-size: 16px;
    margin-bottom: 10%;
  }
`;

export default InfoCard;
