import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github"; 
import Twitter from "@iconscout/react-unicons/icons/uil-twitter"; 

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height:'200px' }} />
      <div className="f-content">
        <span>a.idrissihamza@gmail.com</span>
   
      </div>
    </div>
  );
};

export default Footer;
