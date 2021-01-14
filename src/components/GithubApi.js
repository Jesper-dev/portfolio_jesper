import React from "react";
import styled from "styled-components";

const GithubApi = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <p>Github Api goes here when its done</p>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  height: 30%;
  width: 30%;
  margin: 30px auto;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 50%;
`;

export default GithubApi;
