import { useRef, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWorm, faBars, faX } from "@fortawesome/free-solid-svg-icons";

const NavigationLinks = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  /* VIRKER IKKE, menu kan ikke klikkes på igen
  
  const closeDropdown = () => {
    navRef.current.classList.toggle("close_nav");
  }; */

  return (
    <div className="container navbar">
      <div className="nav-logo">
        <a href="#home">
          <FontAwesomeIcon icon={faWorm} className="logo" />
        </a>
      </div>
      <nav ref={navRef} className="nav-links">
        <a href="#about" id="about_link">
          ABOUT
        </a>
        <a href="#" id="what_i_do_link">
          WHAT I DO
        </a>
        <a href="#" id="contact_link">
          CONTACT
        </a>
        <button onClick={showNavbar} className="btn-icons closing-icon">
          <FontAwesomeIcon icon={faX} />
        </button>
      </nav>

      <button onClick={showNavbar} className="btn-icons hamburger-icon">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default NavigationLinks;
