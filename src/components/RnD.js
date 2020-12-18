import { Component } from 'react';
import React from "react";
import Slider from './Slider/Slider';
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";
import Research1 from "../assets/images/Biotechnology_Research.png";
import Research2 from "../assets/images/Biotechnology_Research1.png";
import "../assets/styles/RnD.css";

class RnD extends React.Component{
    render(){
        return(
            <div className="RnD">
                <div className="container-fluid home-slider">
                    <Slider slides={[slide1,slide2,slide3]}/>
                </div>

                {/* <h2 className="heading">BIOTECH RESEARCH & DEVELOPMENT</h2><br/><br/> */}
                <div className="container-fluid" style={{backgroundColor:"rgb(245, 245, 245)"}}>
                <h2 className="heading pt-5">BIOTECH RESEARCH & DEVELOPMENT</h2>
                    <div className="container">
                        <div className="row pt-5" style={{paddingTop:"15px"}}>
                        
                            <div className="col-lg-8" style={{ textAlign:"left"}}>
                                <p>Biotechnology Research is the application of science and technology to living organisms,
                                     as well as parts, products and models thereof, to alter living or non-living materials
                                    for the production of knowledge, goods and services.</p><br/>
                                <p>Biotechnology is an area of high priority in India and in all countries investing in R&D,
                                     innovation and science based entrepreneurship. There is an increasing acknowledgment that
                                      competence within basic research is of significant importance for innovation and entrepreneurship
                                       based on R&D.</p><br/>
                                <p>Biotechnology is a field that merges concepts from biology with concepts of technology. 
                                    It is broken down into four separate disciplines that are often represented by specific 
                                    colors: red, white, blue, and green. These colors represent medical processes, industrial
                                     processes, marine processes, and agricultural processes respectively.</p><br/><br/>
                            </div>
                            <div className="col-lg-4">
                                <img src={Research1} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>

                <div className="subheading pt-5">
                    <h3>Research & Development Fields</h3>
                </div><br/>
                <div className="container-fluid pt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="svg-box"><i class="fas fa-industry"></i></div>
                                <h6>Industrial Biotechnology</h6>
                            </div>
                            <div className="col-lg-4">
                                <div className="svg-box"><i class="fas fa-seedling"></i></div>
                                <h6>Environment Biotechnology</h6>
                            </div>
                            <div className="col-lg-4">
                                <div className="svg-box"><i class="fas fa-tractor"></i></div>
                                <h6>Agriculture Biotechnology</h6>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>

                <div className="container-fluid pt-5 pb-5" style={{backgroundColor:"#F5F5F5", textAlign:"left", paddingTop:"15px"}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <p>The company has Received a number of Government Research Grants for Research and developing
                                novel processes for waste to wealth conversion as well as upscaling the process for industrial
                                 purposes.</p>
                            <p>Codon Biotech Pvt. Ltd. also has to its credit 3 Process patents and 1 design Patents for 
                                developing Novel and innovative Processes and instruments.</p>
                            <p>Codon Biotech is also a DSIR Certified In – House R & D Centre.</p>
                            <p>Codon Biotech Has developed Processes for:</p>
                            <ul>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Utilization and conversion of Glycerol waste produced during Biodiesel production.</li>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Utilization & Conversion of agricultural waste into Bioethanol and Biobutanol.</li>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Utilization & Conversion of Vegetable & fruit waste into Bioethanol</li>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Bacterial Composting of Household Wastes</li>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Utilizing vegetable & fruit waste for making agarbattis, Incense and candles.</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <img src={Research2} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RnD;
