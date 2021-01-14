import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const GithubApi = () => {
  return (
    <>
      <Nav />
      <PageWrapper>
        <Wrapper>
          <TextWrapper>
            <p>Github Api goes here when its done</p>
          </TextWrapper>
        </Wrapper>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  height: 30%;
  width: 30%;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 20%;
`;

export default GithubApi;
