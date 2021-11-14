import React from "react";
import Slider from "./Slider/Slider";
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";
import bcu1 from "../assets/images/composting.png";
import "../assets/styles/aboutus.css";

class Bcu extends React.Component {
  render() {
    return (
      <div className="Aboutus">
        <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
          <h2 className="heading pt-5">Projects for Training ( ONLINE)</h2>
          <br />
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-8" style={{ textAlign: "left" }}>
                <h6>
                  List of Broad Subjects in Bioinformatics for project based
                  Internship.
                </h6>
                <ul>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Protein homology modeling.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Sequence analysis for human disease targets.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Structure analysis for human disease targets.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Phylogenetic analysis for human disease targets.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Study and In- silico analysis of variable region of human
                    immunoglobulin.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Compositional and structural analysis of human Immunoglobin
                    related to tumors or viral diseases
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Molecular docking studies and repurposing drug
                    identification of various protein targets and drugs ( For
                    different diseases and cancer)
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Molecular modelling studies of various drugs
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Analysis of target molecule for disease & identifying drug
                    candidate by using in silico tools.
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            {/*end of row1*/}

            <div className="row pt-3">
              <div className="col-lg-8" style={{ textAlign: "left" }}>
                <h6>
                  List of Specific Topics in Bioinformatics related projects
                </h6>
                <ul>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Identification of Potential drug targets for Burkholderia
                    sp. Using metabolic pathway analysis.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Identification of Potential drug targets for Enterococcus
                    sp. using in silico tools.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Analysis of commercially available cancer drug against EGFR
                    in case of oral cancer.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Drug designing for control of infection of Heliobacter
                    pylori in Humans.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Identification of Biomarkers in case of cervical or prostate
                    cancer using Bioinformatic tools.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    In silico Analysis of Inhibitors of ACE receptor with
                    respect to COVID Treatment.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Understanding the Structures and activity of SARS CoV E
                    receptor protein.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    In silico analysis of drugs against Hemolysin protein
                    produced due to bacterial infections.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    A review on the Nucleotide and Proteomic In silico data on
                    SARS CoV using different softwares & tools.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    A comparative study of Protein Prediction online tools and
                    their importance in drug designing.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    An in silico analysis on the efficacy of Potential
                    inhibitors for SAR CoV already available.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    A review of different bioinformatic tools being used to
                    study cancer treatment.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Chikungunya - An in silico analysis of the structural & Non-
                    structural proteins of the virus.
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            {/*end of row2*/}

            <div className="row pt-3 pb-5">
              <div className="col-lg-8 " style={{ textAlign: "left" }}>
                <h6>
                  List of Topics for IPR (Intellectual property Rights) Related
                  Projects
                </h6>
                <ul>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Biotechnology patenting, difference between USA and Indian
                    Perspective.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    The role of IPR in protection of Biodiversity in Indian
                    context.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Pharmaceutical patenting in India-problem of public access
                    to health.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    The effectiveness of the remedies for copyright
                    infringement, a global concern.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Traditional knowledge and patent issues: with reference to
                    Basmati, Neem, Turmeric, and Golden rice.
                  </li>
                  <li>
                    <i
                      class="far fa-dot-circle"
                      style={{ color: "#5dd39e", padding: "5px" }}></i>
                    Biotechnology patenting and bio-diversity protection:
                    resolving conflict.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bcu;
