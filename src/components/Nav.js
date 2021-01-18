import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrapper id="header">
      <A href="/">HOME</A>
      <A href="/githubapi">GitHubAPI</A>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 20%;
  height: 50px;
  margin-top: 1%;
  align-self: flex-end;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 400px) {
    width: 100%;
    height: 70px;
    justify-content: space-around;
  }
`;

const A = styled.a`
  font-family: "Rubik", sans-serif;
  padding: 7px 7px;
  background: none;
  border: 2px solid rgb(4, 0, 255);
  border-radius: 5px;
  text-decoration: none;
  font-size: 17px;
  text-align: center;
  width: 100px;
  color: rgb(4, 0, 255);

  &:hover {
    width: 105px;
    transition: width 0.2s ease-in;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    width: 100px;

    &:hover {
      width: 100px;
      transition: none;
    }
  }
`;

export default Nav;
