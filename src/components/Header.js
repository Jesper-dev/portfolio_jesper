import React from "react";
import { Link } from "react-scroll";

const Header = ({ name }) => {
  return (
    <div className="header">
      <div>
        <h1>{name}</h1>
        <p>React, JS, Python, Freelancing, Front-End Dev</p>
        <Link to="about" spy={true} smooth={true}>
          <button className="btn-about">ABOUT ME</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
