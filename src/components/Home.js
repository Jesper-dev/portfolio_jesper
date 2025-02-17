import React from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects/Projects";
import Nav from "./Nav";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Main>
        <About />
        <Projects />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  @media (max-width: 400px) {
    width: 100vw;
  }
`;

export default Home;
