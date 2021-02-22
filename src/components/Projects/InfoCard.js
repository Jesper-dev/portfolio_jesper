import React, { useState } from "react";
import styled from "styled-components";

const InfoCard = ({ text, url, icon }) => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <Text>{text}</Text>
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
  margin-bottom: 0%;
  margin-top: 0%;
  font-family: "Rubik", sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  opacity: 100%;

  @media (max-width: 400px) {
    font-size: 0.8rem;
    width: 120px;
    height: 70px;
    margin: 0;
  }
`;

export default InfoCard;
