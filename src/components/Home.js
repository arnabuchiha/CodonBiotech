import { Component } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import "../assets/styles/home.css";
import home_img from "../assets/images/IMG_0284.jpg";
import ach_bg from "../assets/images/ach-bg.jpg";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div
          class="container-fluid pt-5 pb-5"
          style={{ backgroundColor: "rgb(245, 245, 245)", padding: "20px" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <iframe
                  className="embed-responsive-item"
                  width="450"
                  height="345"
                  src="https://www.youtube.com/embed/vhwiAqiVnD8"
                  frameborder="0"
                  allow="fullscreen;"
                  alt=""
                ></iframe>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 content">
                <p>
                  Codon Biotech Pvt. Ltd. (CBPL) is a company incorporated v/s
                  section 75 of Companies Act, 1956. It was established in 2007
                  with an aim to encourage Biotechnology related research,
                  product development and Skill development which would lead to
                  bridging the gap between Academics & Industry. Codon Biotect
                  received "The Best Biotech Company Award (2017)" in the micro
                  & small scale industry sector from Mr. Shahnawaz given by Zee
                  Business & Achieves India Ltd.
                </p>
                <NavLink to="/aboutus" className="btn btn-primary">
                  More About Us
                </NavLink>
              </div>
            </div>
          </div>
          <br />
        </div>

        <div style={{ backgroundImage: `url(${ach_bg})` }}>
          <div className="container achievements pt-5 pb-5">
            <div className="subheading">
              <h2
                style={{
                  paddingTop: "10px",
                  fontFamily: "'Oswald', 'Times New Roman', Times, serif",
                }}
              >
                ACHIEVE<span style={{ color: "#5dd39e" }}>MENTS</span>
              </h2>
              <br />
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="icon-box">
                  <i class="fab fa-creative-commons-zero"></i>
                </div>
                <h6>ZERO DEBT COMPANY</h6>
              </div>
              <div className="col-lg-4">
                <div className="icon-box">
                  <i class="far fa-newspaper"></i>
                </div>
                <h6>AROUND 50 RESEARCH PAPERS & 3 PATENTS</h6>
              </div>
              <div className="col-lg-4">
                <div className="icon-box">
                  <i class="fas fa-award"></i>
                </div>
                <h6>RECOGNITION BY DSIR AS IN HOUSE R&D UNIT</h6>
              </div>
            </div>
            {/*end of row*/}
            <div className="row">
              <div className="col-lg-4">
                <div className="icon-box">
                  <i class="fas fa-project-diagram"></i>
                </div>
                <h6>CONTRACT RESEARCH PROJECTS</h6>
              </div>
              <div className="col-lg-4">
                <div className="icon-box">
                  <i class="fas fa-pager"></i>
                </div>
                <h6>GOVERNMENT GRANTS FOR PROJECTS FROM BIRAC, DBT</h6>
              </div>
              <div className="col-lg-4">
                <div className="icon-box">
                  <i class="fas fa-school"></i>
                </div>
                <h6>40+ UNIQUE SCHOOL DIY KITS</h6>
              </div>
              <div className="col-lg-6">
                <div className="icon-box">
                  <i class="fab fa-researchgate"></i>
                </div>
                <h6>
                  MORE THAN 60 + BIOTECH RELATED TEACHING AND RESEARCH KITS
                </h6>
              </div>
              <div className="col-lg-6">
                <div className="icon-box">
                  <i class="fas fa-university"></i>
                </div>
                <h6>
                  MOUS SIGNED WITH 10 + DIFFERENT UNIVERSITIES FOR RESEARCH &
                  DEVELOPMENT
                </h6>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
