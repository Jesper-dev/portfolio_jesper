import React from "react";
import { Link } from "react-scroll";
import computerMinimalist from "../img/computer.png";
import computerScreen from "../img/computerscreen-transparent.png";
import styled from "styled-components";
import TextChanger from "./TextChanger";

const Header = ({ name }) => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Title>{name}</Title>
        <Text>
          <TextChanger />
        </Text>
        <Link to="about" spy={true} smooth={true}>
          <Button>ABOUT ME</Button>
        </Link>
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  flex: 1 1 100px;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 400px) {
    height: 100vh;
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 10%;
  color: white;
`;

const Title = styled.h1`
  font-size: 52px;
  margin: 0;
  color: rgb(0, 1, 66);
  font-family: "Rubik", sans-serif;

  @media (max-width: 400px) {
    font-size: 34px;
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
  border: 2px solid rgb(4, 0, 255);
  border-radius: 10px;
  color: rgb(4, 0, 255);
  outline: none;

  &:hover {
    cursor: pointer;
    animation: bounce 1s ease-out;
  }

  @media (max-width: 400px) {
    &:hover {
      cursor: none;
      animation: none;
    }
  }

  @keyframes bounce {
    0%,
    20%,
    60%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    40% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }

    80% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }
`;

const Text = styled.p`
  margin: 10px;

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  align-self: flex-start;

  @media (max-width: 400px) {
    display: none;
  }
`;

export default Header;
