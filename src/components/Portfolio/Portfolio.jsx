import React, { useContext } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import Movex from "../Project/Movex";
import Thenext from "../Project/Thenext";
import Maptivity from "../Project/Maptivity";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="projects">
        <Thenext />
        <Maptivity />
        <Movex />
      </div>
    </div>
  );
};

export default Portfolio;
