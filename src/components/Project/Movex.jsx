import React from "react";
import "./Project.css";
import movex from "../../img/movex.PNG";
const Movex = () => {
  return (
    <div className="project-container">
      <img src={movex} className="project-img" />
      <h1 className="project-title">Movex</h1>
      <p className="project-description">
        This project is a movie application with firebase authentication, a
        watchlist where a user can add his favorite movies, and a search option.
        <br /> It's built with <a href="https://reactjs.org/" target="_blank">React</a> &{" "}
        <a href="https://nextjs.org/" target="_blank">Next.js</a>, it connects to the{" "}
        <a href="https://developers.themoviedb.org/3" target="_blank">TMDB </a>API to display
        and search for movies. The styling is done with{" "}
        <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS.</a>
      </p>
      <div className="project-links">
        <a
          className="project-link"
          href="https://movex.vercel.app/" 
          target="_blank"
        >
          Live Demo
        </a>
        <a
          className="project-link"
          href="https://github.com/idrissi-hamza/movex"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Movex;
