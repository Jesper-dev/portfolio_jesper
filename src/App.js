import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import GithubApiPage from "./components/GithubApiPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Link to="/"></Link>
        <Link to="/githubapi"></Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/githubapi">
            <GithubApiPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  background-color: rgb(229, 229, 229);
  font-family: "Noto Sans JP", sans-serif;

  @media (max-width: 400px) {
    max-width: 100vmax;
  }
}

&:-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

&::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

&::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
  
`;

export default App;
