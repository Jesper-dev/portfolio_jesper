import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Link to="header" spy={true} smooth={true}>
        <ArrowUp className="fas fa-arrow-up"></ArrowUp>
      </Link>

      <IconWrapper>
        <Icon
          target="_blank"
          rel="noreferrer"
          href="https://github.com/JesperKYH"
        >
          <i className="fab fa-github"></i>
        </Icon>
        <Icon
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jesper-pettersson-218245179/"
        >
          <i className="fab fa-linkedin-in"></i>
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 25vh;
  background-color: rgb(51, 51, 51);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    width: 100vw;
  }
`;

const IconWrapper = styled.div`
  width: 20%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 400px) {
    height: 50px;
    width: 200px;
  }
`;

const Icon = styled.a`
  font-size: 3rem;
  color: black;

  &:hover {
    font-size: 3.2rem;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 3.6rem;

    &:hover {
      font-size: 3.6rem;
      cursor: none;
    }
  }
`;

const ArrowUp = styled.i`
  font-size: 3rem;
  margin-bottom: 25px;

  &:hover {
    font-size: 3.2rem;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 3.6rem;

    &:hover {
      font-size: 3.6rem;
      cursor: none;
    }
  }
`;

export default Footer;
