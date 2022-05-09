import React from "react";
import "./Project.css";
import thenext from "../../img/thenext.PNG";
const Thenext = () => {
  return (
    <div className="project-container">
      <img src={thenext} className="project-img" />
      <h1 className="project-title">TheNext</h1>
      <p className="project-description">
        TheNext is a planner that allows an authenticated user to add his tasks
        and keep track of their progress, with a minimalist UI & responsive
        design that gives a user a nice experience.
        <br /> It's built with <a href="https://reactjs.org/" target="_blank">React</a> & The
        styling is done with{" "}
        <a href="https://tailwindcss.com/" target="_blank">
          Tailwindcss.
        </a>
        &nbsp; Authentication & storage with{" "}
        <a href="https://firebase.google.com/" target="_blank">
          Firebase.
        </a>
      </p>

      <div className="project-links">
        <a
          className="project-link"
          href="https://the-next-plan.vercel.app/"
          target="_blank"
        >
          Live Demo
        </a>
        <a
          className="project-link"
          href="https://github.com/idrissi-hamza/TheNext"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Thenext;
