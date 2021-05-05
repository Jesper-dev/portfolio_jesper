import React from "react";
import styled from "styled-components";

const LanguagesAndTools = () => {
  let LanguagesAndTools = [
    "HTML",
    "CSS",
    "JavaScript",
    "REACT",
    "Vue/Nuxt",
    "Strapi",
    "Firebase/Firestore",
    "Express",
  ];
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Languages and Tools</h1>
      </TitleWrapper>
      <TextWrapper>
        {LanguagesAndTools.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  margin: 16px;
  margin-top: 46px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  width: 90%;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  border: none;

  p {
    font-size: 1.2rem;
  }
`;

export default LanguagesAndTools;
