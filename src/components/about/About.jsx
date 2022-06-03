import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container about_container">
      <section id="about">
        <h2 className="section_header">ABOUT</h2>
        <div className="about_wrapper">
          <div className="about_wrapper_one">
            <h5 className="about_wrapper_main_title">ME</h5>
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
          <div className="about_wrapper_two">
            <button className="btn">SOME KIND OF BUTTON</button>
          </div>
          <h5 className="card_title work">WORK EXPERIENCE</h5>
          <div className="cards">
            <div className="card">
              <h6 className="card_title">PROJECT MANAGER</h6>
              <p className="card_text">B.T. (Berlingske Media)</p>
              <p className="card_text">Mar. 2021 - Sep. 2021</p>
            </div>
            <div className="card">
              <h6 className="card_title">JOURNALIST & PROJECT MANAGER</h6>
              <p className="card_text">B.T. Sport (Berlingske Media)</p>
              <p className="card_text">Mar. 2019 - Mar. 2021</p>
            </div>
            <div className="card">
              <h6 className="card_title">REPORTER</h6>
              <p className="card_text">Discovery Networks Denmark</p>
              <p className="card_text">Feb. 2018 - Dec. 2018</p>
            </div>
            <div className="card">
              <h6 className="card_title">COMMUNITY MANAGER</h6>
              <p className="card_text">B.T. Sport (Berlingske Media)</p>
              <p className="card_text">Mar. 2016 - Feb. 2019</p>
            </div>
            <div className="card">
              <h6 className="card_title">ONLINE COORDINATOR</h6>
              <p className="card_text">Explorius Denmark</p>
              <p className="card_text">Mar. 2015 - Aug. 2019</p>
            </div>
          </div>
          <h5 className="card_title education">EDUCATION</h5>
          <div className="cards">
            <div className="card">
              <h6 className="card_title">PRINCE2® FOUNDATION</h6>
              <p className="card_text">Danish Technological Institute</p>
              <p className="card_text">May, 2022</p>
            </div>
            <div className="card">
              <h6 className="card_title">MA COMPARATIVE LITERATURE</h6>
              <p className="card_text">University of Copenhagen</p>
              <p className="card_text">2015-2017</p>
            </div>
            <div className="card">
              <h6 className="card_title">BA COMPARATIVE LITERATURE</h6>
              <p className="card_text">University of Copenhagen</p>
              <p className="card_text">2011-2011</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
