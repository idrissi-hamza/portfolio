import React, { useContext } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import Movex from "../Project/Movex";
import Thenext from "../Project/Thenext";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="projects">
        <Movex />
        <Thenext/>
      </div>
    </div>
  );
};

export default Portfolio;
