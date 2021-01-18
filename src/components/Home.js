import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Nav from "./Nav";
import styled from "styled-components";

const name = "<JesperPettersson /> ";

const Home = () => {
  return (
    <>
      <Nav />
      <Header name={name} />
      <Main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Main>
    </>
  );
};

const Main = styled.main`
  @media (max-width: 400px) {
    width: 100vw;
  }
`;

export default Home;
