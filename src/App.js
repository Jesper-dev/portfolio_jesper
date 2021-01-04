import React from "react";
import WikiSearch from "./components/wikiSearch";
import Route from "./components/Route";
import Header from "./components/Header"
import Home from "./components/Home"

import "./components/AnimatedText.module.css";
import "./style/style.css";



function App() {

    return (

        <div className="header">
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="wikiSearch">
                <WikiSearch />
            </Route>
        </div>
    )
}

export default App;
