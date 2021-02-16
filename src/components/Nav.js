import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavWrapper id="header">
      <LinkWrapper>
        <A href="/">
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            HOME
          </Link>
        </A>
        <A href="/githubapi">
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/githubapi"
          >
            GitHubAPI
          </Link>
        </A>
      </LinkWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  max-width: 100vw;
  height: 100px;
  background-color: #222831;
  display: flex;

  @media (max-width: 400px) {
    max-width: 100vw;
  }
`;

const LinkWrapper = styled.div`
  width: 20%;
  height: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 400px) {
    width: 100%;
    height: inherit;
    justify-content: space-around;
  }
`;

const A = styled.button`
  font-family: "Rubik", sans-serif;
  padding: 7px 7px;
  background: none;
  outline: none;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 22px;
  text-align: center;
  width: 100px;
  color: rgb(4, 0, 255);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 400px) {
    font-size: 22px;
    width: 100px;

    &:hover {
      width: 100px;
      transition: none;
    }
  }
`;

export default Nav;
