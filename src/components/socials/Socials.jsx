import React from "react";
import "./socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="socials">
      <div className="header_socials">
        <a href="#" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="header_social_linkedin"
          />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="header_social_github" />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="header_social_instagram"
          />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="header_social_twitter" />
        </a>
      </div>
      <div className="fixed-email">xxx.dddddd@gmail.com</div>
    </div>
  );
};

export default Socials;
