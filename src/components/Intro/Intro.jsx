import React, { useContext } from "react";
import "./Intro.css";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! My name is</span>
          <span>A.Idrissi Hamza</span>
          <span  style={{ color: darkMode ? "#eee" : "#aaa" }}> I build (and occasionally design) exceptional digital experiences.</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact</button>
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div> */}
        <div
          className="blur blur-intro"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
