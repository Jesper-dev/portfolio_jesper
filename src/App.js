import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

import "./style/style.css";

const name = "<JesperPettersson /> ";

function App() {
  return (
    <>
      <Header name={name} />
      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
