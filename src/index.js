import React from 'react';
import ReactDOM from "react-dom";
import AnimatedText from "./components/AnimatedText"
import "./style/style.css";


const name = "<JESPER PETTERSSON />"

function App() {

    return (
        <div className="App">
            <AnimatedText textColor="#cd122d" overlayColor="#fdc5c">
                {name}
            </AnimatedText>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));