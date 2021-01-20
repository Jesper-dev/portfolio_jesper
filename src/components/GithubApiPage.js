import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import GithubApi from "./GithubApi";

const GithubApiPage = () => {
  return (
    <>
      <Nav />

      <PageWrapper>
        <GithubApi />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  margin-top: 5%;
  height: 100vh;
  width: 99%;
  display: flex;
  flex: 1 1;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export default GithubApiPage;
