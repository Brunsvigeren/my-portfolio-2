import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWorm } from "@fortawesome/free-solid-svg-icons";

const NavigationLinks = () => {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <a href="#">
          <FontAwesomeIcon icon={faWorm} className="logo" />
        </a>
      </div>
      <div className="nav-links">
        <a href="#" id="about_link">
          ABOUT
        </a>
        <a href="#" id="what_i_do_link">
          WHAT I DO
        </a>
        <a href="#" id="contact_link">
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default NavigationLinks;
