import React, { Component } from "react";
import { Icon } from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import javaIcon from "@iconify/icons-logos/java";
import ocamlIcon from "@iconify/icons-logos/ocaml";

class About extends Component {
  render() {
    var profilepic = "images/BrianLau.jpg";
    var sectionName = "About me";
    var hello = "Hi, my name is Brian! 👋";

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={ocamlIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={javaIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-serif text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "175%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    ⚫I'm a student at the University of Maryland: College Park
                    pursuing a degree in Mathematics and Computer Science.
                    <br />
                    ⚫My interests include data science, web development, and
                    functional programming.
                    <br />
                    ⚫I interned with Northrop Grumman this past summer and will
                    be an SDE intern for Amazon this summer
                    <br />
                    ⚫Feel free to reach out about any opportunities or if you
                    want to learn more about me.
                    <br />
                    <div className="text-center">
                      <a
                        href="BrianLauResume2023.pdf"
                        className="btn btn-primary btn-lg mx-auto"
                        style={{ backgroundColor: "white", color: "black" }}
                        download
                      >
                        Click For My Resume!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
