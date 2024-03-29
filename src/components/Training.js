import React from "react";
import tpd1 from "../assets/images/tpd-1.png";
import tpd2 from "../assets/images/tpd-2.png";
import tpd3 from "../assets/images/tpd-3.JPG";
import workshop1 from "../assets/images/ONLINEWorkshopI.pdf";
import workshop2 from "../assets/images/ONLINEWorkshop2.pdf";

class Training extends React.Component {
  render() {
    return (
      <div className="Training">
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(245, 245, 245)" }}
        >
          <div className="subheading pt-5">
            <h2>Training Projects Dissertation</h2>
          </div>
          <div className="container">
            <div className="row pt-5" style={{ paddingTop: "15px" }}>
              <div className="col-lg-6" style={{ textAlign: "left" }}>
                <p>
                  <strong>SKILL DEVELIPMENT / TRAININGS :</strong> Codon Biotech
                  believes in imparting complete hands on practical training in
                  various advanced Biotechnology related techniques.
                  Availability of trained manpower is a big hurdle for the
                  industry that needs certain specific skill sets. Our state of
                  the art laboratory is designed to provide an atmosphere
                  abreast with the R and D laboratories, Bio-Pharma Industrial
                  units and Quality testing units, thus bridging the gap between
                  academics and Industry.
                </p>
                <br />
                <p>
                  <strong>WORKSHOPS :</strong> Biotech and Biology Related
                  Workshops are conducted both at the State of Art labs of the
                  company as well as at any University or college premises for
                  eg.. at Different Delhi University colleges like Hansraj
                  College, Ramjas College, Miranda House.... etc as well as
                  other colleges affiliated to CCS, Meerut University, UP
                  Technical University, Rajasthan University etc..
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#workshopModalCenter"
                  style={{ left: "50%" }}
                >
                  Workshops Conducted
                </button>
                <br />
                <br />
              </div>

              <div className="col-lg-6">
                <img src={tpd1} className="img-fluid" alt="" />
              </div>
            </div>
            {/*end of row1*/}

            <div className="row">
              <div className="col-lg-6">
                <img src={tpd2} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-5" style={{ textAlign: "left" }}>
                <p>
                  <strong>SUBJECTS : </strong>
                </p>
                <ul>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Molecular Biology
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Immunology
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Forensic Sciences
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Recombinant DNA Technology
                  </li>
                  <br />
                </ul>
                <p>
                  <strong>PROJECTS AND DISSERTATIONS :</strong> Codon Biotech
                  specializes in planning and designing of projects and
                  providing state of the art infrastructure for students to
                  conduct the research work and then also provide the technical
                  know-how in interpretation, analysis and publication of the
                  result. Students are encouraged to design their own
                  individualized projects with the help of our Scientists and
                  faculties. The company has a team of highly talented
                  Scientists who have vast experience in conducting research
                  work and have numerous Research Publications and Patents to
                  their credit.
                </p>
                <br />
              </div>
            </div>
            {/*End of row2*/}
            <div className="row">
              <div className="col-lg-6 pt-5" style={{ textAlign: "left" }}>
                <ul>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Proteomics & Enzymology
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Molecular Biology & Genomics
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Advanced RDT
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Microbial Biotechnology
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Immunotechnology
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Plant & Agricultural Biotechnology
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Fuel & Industrial Biotech
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Fermentation Technology & Downstream Processing
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Forensic Sciences
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Quality Control Module
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Chromatography Module
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Bioinformatics
                  </li>
                  <br />
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}
                    ></i>
                    Self- emplyoment generation Modules
                  </li>
                  <br />
                </ul>
              </div>
              <div className="col-lg-6 pb-5">
                <img src={tpd3} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

          {/*Modal for workshop */}
          <div
            className="workshopModal"
            class="modal fade"
            id="workshopModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    WORKSHOPS
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <div className="row">
                      <a href={workshop1} target="_blank">
                        <i class="far fa-file-pdf"></i>Understanding Biochemical
                        Techniques and its application
                      </a>
                    </div>
                    {/*end of modal row1*/}

                    <div className="row">
                      <a href={workshop2} target="_blank">
                        <i class="far fa-file-pdf"></i>Advance techniques in
                        Plant Sciences
                      </a>
                    </div>
                    {/*end of modal row2*/}
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Training;
