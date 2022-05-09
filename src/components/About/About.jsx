import React, { useContext } from "react";
import "./About.css";

import { themeContext } from "../../Context";


import { SiNextdotjs,SiReact,SiTailwindcss ,SiSass,SiHtml5,SiCss3,SiGit,SiGithub,SiJavascript,SiRedux,SiFigma} from "react-icons/si";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about" id="about">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span className="title" style={{ color: darkMode ? "white" : "" }}>
          About Me
        </span>
        {/* <span>services</span> */}

        <p style={{ margin: "2px 0" }}>I'm a Frontend Developper</p>
        <div style={{ color: "#788097", fontSize: "30px", fontWeight: "bold" }}>
          A mechanical engineer by degree, a passionate self-taught  Front End Web Developer (specializing in React Applications) 
          <br />

          I'm a tireless seeker of the 'why' of things, and finding both a good
          and efficient way of solving problems, with a meticulous attention to
          details.
        </div>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-icons-container">
        
          <div className="skill-icon-container">
            <SiReact className="skill-icon"/>
            <p className="title-uicon">React</p>
          </div>
          <div className="skill-icon-container">
            <SiJavascript className="skill-icon"/>
            <p className="title-uicon">JavaScript</p>
          </div>
          <div className="skill-icon-container">
            <SiCss3 className="skill-icon"/>
            <p className="title-uicon">Css</p>
          </div>
          <div className="skill-icon-container">
            <SiHtml5 className="skill-icon"/>
            <p className="title-uicon">HTML</p>
          </div>
          <div className="skill-icon-container">
            <SiTailwindcss className="skill-icon"/>
            <p className="title-uicon">Tailwindcss</p>
          </div>
          <div className="skill-icon-container">
            <SiNextdotjs className="skill-icon"/>
            <p className="title-uicon">Next.js</p>
          </div>
          <div className="skill-icon-container">
            <SiSass className="skill-icon"/>
            <p className="title-uicon">Sass</p>
          </div>
          {/* <div className="skill-icon-container">
            <SiRedux className="skill-icon"/>
            <p className="title-uicon">Redux</p>
          </div> */}
          <div className="skill-icon-container">
            <SiGit className="skill-icon"/>
            <p className="title-uicon">Git</p>
          </div>
          <div className="skill-icon-container">
            <SiGithub className="skill-icon"/>
            <p className="title-uicon">GitHub</p>
          </div>
          <div className="skill-icon-container">
            <SiFigma className="skill-icon"/>
            <p className="title-uicon">Figma</p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
