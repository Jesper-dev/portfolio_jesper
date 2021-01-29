import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const texts = ["React", "JavaScript", "Front-End"];

const TextChanger = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 4000);
  }, []);

  return (
    <>
      <TextTransition
        text={texts[index % texts.length]}
        springConfig={presets.wobbly}
        delay={5}
        style={style}
      />
    </>
  );
};

const style = {
  color: "rgb(0, 1, 66)",
  fontSize: "1.5rem",
  height: "2%",
};

export default TextChanger;
