import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrapper>
      <A href="/githubapi">GitHubAPI</A>
      <A href="/">Home</A>
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
`;

export default Nav;
