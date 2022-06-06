import React from "react";
import "./what_i_do.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const What_I_do = () => {
  return (
    <div className="container what_i_do_container">
      <section id="what_i_do">
        <h2 className="section_header">WHAT I DO</h2>
        <div className="cards wid">
          <div className="card wid">
            <h5 className="card_title_wid">PROJECT MANAGEMENT</h5>
            <div className="card_wid_text">
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  Scheduling & time management
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Problem solving</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  Effective communication
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Production planning </h6>
              </article>

              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Technical savvy</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Organized</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Driven</h6>
              </article>
            </div>
          </div>
          <div className="card wid">
            <h5 className="card_title_wid">MEDIA PRODUCTION</h5>
            <div className="card_wid_text">
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  Digital media production
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Journalism</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Podcast & radio</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  Live tv, streaming & video
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Critical thinking</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Storyteller</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Research</h6>
              </article>
            </div>
          </div>
          <div className="card wid">
            <h5 className="card_title_wid">TOOLS</h5>
            <div className="card_wid_text">
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">CMS & Work OS</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Google & Office</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Slack</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">Social Media</h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  HTML & CSS <span className="small_text">(intermediate)</span>
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  JavaScript & React <span className="small_text">(basic)</span>
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  Premiere Pro{" "}
                  <span className="small_text">(intermediate)</span>
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  Photoshop <span className="small_text">(basic)</span>
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  Hindenbur <span className="small_text">(basic)</span>
                </h6>
              </article>
              <article className="card_wid_text_p">
                <FontAwesomeIcon icon={faCheck} className="check_icon" />
                <h6 className="card_wid_text_detail">
                  Github <span className="small_text">(basic)</span>
                </h6>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default What_I_do;
