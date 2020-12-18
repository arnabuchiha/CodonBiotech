import { Component } from 'react';
import React from "react";
import Slider from './Slider/Slider';
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";
import tk1 from "../assets/images/Teaching_Kits.png";
import tk2 from "../assets/images/Teaching_Kits1.png";
import "../assets/styles/tk.css";

class TK extends React.Component{
    render(){
        return(
            <div className="TK">
                 <div className="container-fluid home-slider">
                    <Slider slides={[slide1,slide2,slide3]}/>
                </div>
            
            <div className="container-fluid " style={{backgroundColor:"rgb(245, 245, 245)"}}>
                <div className="subheading pt-5">
                    <h2>TEACHING KITS</h2>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8 pt-5" style={{textAlign:"left"}}>
                            <p>CODON BIOTECH PRIVATE LIMITED is a Biotech company involved is a Research & Development. 
                                It offers a large range of Biotechnology related teaching kits which have been designed 
                                and developed for understanding basic techniques in the fields of Proteomics, Molecular 
                                Biology, Microbiology, Immunology, Clinical pathology and Chromatography. These kits are
                                designed to assist in Academics and research thought process of the students and teachers
                                of schools and colleges. The teaching kits help and guide students in preparation and 
                                implementation of their lessons by providing practical training in a very comprehensive,
                                hands on and effective manner.</p>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#kits1ModalCenter" style={{float:"center"}}>View Kits</button>

                            {/*modal*/}

                            <div class="modal fade" id="kits1ModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">KITS</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <a href="http://codonbiotech.com/document/proteomics.pdf" target="_blank"><i class="far fa-file-pdf"></i>PROTEOMICS</a> 
                                            </div>
                                            <div className="col-lg-6">
                                            <a href="http://codonbiotech.com/document/genomics.pdf" target="_blank"><i class="far fa-file-pdf"></i>GENOMICS</a>
                                            </div>
                                        </div>
                                        {/*end of row1*/}

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <a href="http://codonbiotech.com/document/microbiology.pdf" target="_blank"><i class="far fa-file-pdf"></i>MICROBIOLOGY</a> 
                                            </div>
                                            <div className="col-lg-6">
                                            <a href="http://codonbiotech.com/document/RDT.pdf" target="_blank"><i class="far fa-file-pdf"></i>RDT</a>
                                            </div>
                                        </div>
                                        {/*end of row2*/}
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <a href="http://codonbiotech.com/document/chromatography.pdf" target="_blank"><i class="far fa-file-pdf"></i>CHROMATOGRAPHY</a> 
                                            </div>
                                            <div className="col-lg-6">
                                            <a href="http://codonbiotech.com/document/molecularbiology.pdf" target="_blank"><i class="far fa-file-pdf"></i>MOLECULAR BIOLOGY</a>
                                            </div>
                                        </div>
                                        {/*end of row3*/}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <a href="http://codonbiotech.com/document/immunology.pdf" target="_blank"><i class="far fa-file-pdf"></i>IMMUNOLOGY & CLINICAL PATHOLOGY</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-5">
                            <img src={tk1} className="img-fluid" alt="/"/>
                        </div>
                    </div><br/><br/><br/>

                    <div className="subheading pt-5">
                        <h3>SCHOOL LEVEL SCIENCE & BIOLOGY TEACHING KITS (6TH TO 12TH CLASS)</h3>
                    </div>
                    <div className="row pb-5">
                        <div className="col-lg-8 pt-5" style={{textAlign:"left"}}>
                            <p>CODONTM make science teaching kits are designed to support fun-learning, hands-on Science
                                 & Biology implementation in the classroom as well as at home. Each kit includes a Facilitator
                                  Guide which contains overview, materials list, and preparation steps, followed by clear, 
                                  step-by-step instructions for effective hands on application. Background information is 
                                  provided along with photographs, illustrations.</p>
                            <p>We rely on our professional knowledge, experience, and expertise to produce useful learning 
                                resources for school level students. The teaching kits have been developed in conjunction with
                                 teachers and higher education advisers.</p>
                            <p>Support your CHILD’S learning process and help them exceed academic standards with hands-on 
                                Science & Biology teaching kits.</p>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#kits2ModalCenter" style={{float:"center"}}>View Kits</button>

                                {/*modal*/}
                                <div class="modal fade" id="kits2ModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">KITS</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <a href="http://codonbiotech.com/document/SchoolPracticalKitpricelist2018-19.pdf" target="_blank"><i class="far fa-file-pdf"></i>Hands On Kits</a>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4 pt-5">
                            <img src={tk2} className="img-fluid" alt="/"/>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        )
    }
}

export default TK;