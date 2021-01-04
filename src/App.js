import React from "react";
import AnimatedText from "./components/AnimatedText";
import WikiSearch from "./components/wikiSearch";
import Route from "./components/Route";
import Header from "./components/Header";

import "./components/AnimatedText.module.css";
import "./style/style.css";

const name = "<jesperPettersson hover={ me } /> ";

function App() {
  return (
    <div className="header">
      <Header />
      <Route path="/">
        <AnimatedText textColor="#cd122d" overlayColor="#fdc5c">
          {name}
        </AnimatedText>
      </Route>
      <Route path="wikiSearch">
        <WikiSearch />
      </Route>
    </div>
  );
}

export default App;
