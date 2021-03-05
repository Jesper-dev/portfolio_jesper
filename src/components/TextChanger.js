import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TextChanger = () => {
  const [index, setIndex] = useState(0);
  const [didMount, setDidMount] = useState(false);

  const texts = ["React", "Front-End", "Vue/Nuxt"];

  useEffect(() => {
    setDidMount(true);
    setInterval(() => {
      setIndex((index) => index + 1);
    }, 4000);

    return () => {
      setDidMount(false);
      console.log(didMount);
    };
  }, [didMount]);

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
  fontSize: "1.7rem",
  height: "2%",
  fontWeight: "bold",
};

export default TextChanger;
