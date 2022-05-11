import React from "react";
import "./Project.css";
import movex from "../../img/maptivity.PNG";
const Maptivity = () => {
  return (
    <div className="project-container">
      <img src={movex} className="project-img" />
      <h1 className="project-title">Maptivity</h1>
      <p className="project-description">
        This project is a map where a user can pin a note or an activity
        <br /> It's built with{" "}
        <a href="https://reactjs.org/" target="_blank">
          React
        </a>
        , &{" "}
        <a href="https://react-leaflet.js.org/" target="_blank">
          Leaflet{" "}
        </a>{" "}
         library.
        <br />
        The styling is done with{" "}
        <a href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </a>
      </p>
      <div className="project-links">
        <a
          className="project-link"
          href="https://maptivity.vercel.app/"
          target="_blank"
        >
          Live Demo
        </a>
        <a
          className="project-link"
          href="https://github.com/idrissi-hamza/Maptivity"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Maptivity;
