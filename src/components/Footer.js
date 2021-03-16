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
          href="https://github.com/Jesper-dev"
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
        <Icon href="mailto:jesper.pettersson00@hotmail.com">
          <i className="far fa-envelope"></i>
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 25vh;
  /* background-color: rgb(51, 51, 51); */
  background-color: #0f0f0f;
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
    width: 300px;
  }
`;

const Icon = styled.a`
  font-size: 3rem;
  color: #dfe0df;

  &:hover {
    font-size: 3.2rem;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 2.8rem;

    &:hover {
      font-size: 2.8rem;
      cursor: none;
    }
  }
`;

const ArrowUp = styled.i`
  font-size: 3rem;
  margin-bottom: 25px;
  color: #dfe0df;

  &:hover {
    font-size: 3.2rem;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 3.5rem;

    &:hover {
      font-size: 3.5rem;
      cursor: none;
    }
  }
`;

export default Footer;
