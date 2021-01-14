import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Nav from "./Nav";

const name = "<JesperPettersson /> ";

const Home = () => {
  return (
    <>
      <Nav />
      <Header name={name} />
      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
