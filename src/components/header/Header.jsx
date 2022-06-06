import React from "react";
import "./header.css";
import Socials from "../../components/socials/Socials";
import { BsClipboardCheck, BsPlayCircle, BsCodeSlash } from "react-icons/bs";

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
              I wear many hats with many different purposes, and I can wear one
              that suits your project.
            </p>
          </div>
        </div>
        <div className="mobile_display">
          <div className="cards header">
            <div className="card header">
              <BsClipboardCheck className="header_icon" />
              <h4 className="card_header_title">Project Management</h4>
            </div>
            <div className="card header">
              <BsPlayCircle className="header_icon" />
              <h4 className="card_header_title">Media Production</h4>
            </div>
            <div className="card header">
              <BsCodeSlash className="header_icon" />
              <h4 className="card_header_title">Web Development</h4>
            </div>
          </div>
        </div>
      </div>
      <Socials />
    </header>
  );
};

export default Header;
