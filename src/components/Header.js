import React from "react";
import { Link } from "react-scroll";
import computerMinimalist from "../img/computer.png";

const Header = ({ name }) => {
  return (
    <div id="header" className="header">
      <img src={computerMinimalist} />
      <div>
        <h1>{name}</h1>
        <p>React JS Front-End Dev</p>
        <Link to="about" spy={true} smooth={true}>
          <button className="btn-about">ABOUT ME</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
