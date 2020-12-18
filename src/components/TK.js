import { Component } from 'react';
import React from "react";
import Slider from './Slider/Slider';
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";
import tk1 from "../assets/images/Teaching_Kits.png";
import tk2 from "../assets/images/Teaching_Kits1.png";

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
                            <a href="#"><button type="button" className="btn btn-primary" style={{float:"center"}}>View Kits</button></a>
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
                                <a href="#"><button type="button" className="btn btn-primary" style={{float:"center"}}>View Kits</button></a>
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