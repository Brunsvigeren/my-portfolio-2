import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./about.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="container about_container">
      <section id="about">
        <h2 className="section_header">ABOUT</h2>
        <div className="about_wrapper">
          <div className="about_wrapper_one">
            <p className="about_wrapper_main_paragraph">
              "So, what do you do for a living?" You're probably familiar with
              the question. And were you to ask me that question a couple of
              years ago I would probably have given you my formal job title at
              the time and the name of my current employer. Now, I don't
              consider myself a title. I wear many hats with many different
              purposes, and I can wear one that suits you.
              <br />
              <br />
              Let me therefore introduce myself as what I consider myself to be
              - a specialized generalist with several years of experience in
              digital media and media production, journalism, project
              management, technical savvy and much more. I am a fast learner and
              approach any new challenge as a learning opportunity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
