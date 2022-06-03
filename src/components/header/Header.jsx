import React from "react";
import "./header.css";
import Socials from "../../components/socials/Socials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <div className="header_wrapper">
          <div className="header_wrapper_top">
            <h1 className="header_title">BRAUNSCHWEIG</h1>
          </div>
          <div className="header_wrapper_one">
            <img
              src="./images/header_photo.jpg"
              className="header_photo"
              alt="colours"
            />
          </div>
          <div className="header_wrapper_two">
            <h3>
              I am
              <br />
              <span className="name-hightlight">Stine Braunschweig</span>,
              <br />
              and I do stuff.
            </h3>
          </div>
          <div className="header_wrapper_three">
            <p className="header_paragraph">
              ... such as project management, media prodcution and a little bit
              of web development. In other words, I wear many hats with many
              different purposes, and I can wear one that suits your project.
            </p>
          </div>
        </div>
      </div>
      <Socials />
    </header>
  );
};

export default Header;
