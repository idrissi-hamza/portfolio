import React from "react";
import "./Social.css";

import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Social = () => {
  return (
    <div className="s-icons">
      {/* <Facebook color="white" size={"3rem"} /> */}
      <a href="https://github.com/idrissi-hamza" target="_blank">
        <Gitub className="s-icon" color="#788097" size={"1.5rem"} />
      </a>
      <a href="https://twitter.com/specialidrissi" target="_blank">
        <Twitter className="s-icon" color="#788097" size={"1.5rem"} />
      </a>
      <a href="https://www.linkedin.com/feed/" target="_blank">
        <Linkedin className="s-icon" color="#788097" size={"1.5rem"} />
      </a>
      <div className="line" />
    </div>
  );
};

export default Social;
