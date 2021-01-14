import React from "react";
import { Link } from "react-scroll";
import computerMinimalist from "../img/computer.png";
import computerScreen from "../img/computerscreen-transparent.png";
import styled from "styled-components";

const Header = ({ name }) => {
  return (
    <HeaderWrapper id="header">
      <Image src={computerMinimalist} />
      <Wrapper>
        <Title>{name}</Title>
        <Text>React JS Front-End Dev</Text>
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
`;

const Text = styled.p`
  font-size: 24px;
  margin: 20px;
  color: rgb(25, 25, 25);
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  align-self: flex-start;
`;

export default Header;
