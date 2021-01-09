import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="footer-container">
      <Link className="arrow-up" to="header" spy={true} smooth={true}>
        <i className="fas fa-arrow-up"></i>
      </Link>

      <div className="icon-container">
        <a target="_blank" href="https://github.com/JesperKYH">
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jesper-pettersson-218245179/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
