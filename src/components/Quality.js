import { Component } from 'react';
import React from "react";
import Slider from './Slider/Slider';
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";
import qt1 from "../assets/images/qt1.png";
import qt2 from "../assets/images/qt2.png";
import qt3 from "../assets/images/qt3.png";
import "../assets/styles/quality.css";

class Quality extends React.Component{
    render(){
        return(
            <div className="Quality">

                <div className="container-fluid" style={{backgroundColor:"rgb(245, 245, 245)"}}>
                    <div className="subheading pt-5">
                        <h2>QUALITY TESTING</h2>
                    </div>
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-lg-6" style={{textAlign:"left"}}>
                                <p>Codon Biotech Pvt. Ltd. has been involved in Microbiological and Quality Testing of Food Products
                                    and water and other liquids for the past 3-4 Years. Our Experienced scientists routinely carry
                                    out complete range of Microbiological testing of all aerobic, anaerobic, pathogenic or 
                                    non pathogenic microorganisms in samples of food material, water, juices, cosmetics, etc.
                                    Quality testing also involves all parameters pertaining to different food products or liquids
                                    like Total protein content, fat content, energy, Sugar content etc...</p>
                                    <p>All Test protocols which are followed are according to all national & international 
                                        standards and client specification.</p>
                            </div>
                            <div className="col-lg-6">
                                <img src={qt1} className="img-fluid" alt="/"/>
                            </div>
                        </div>
                        {/*end of row1*/}
                        <div className="row">
                            <div className="col-lg-6">
                                    <img src={qt2} className="img-fluid" alt="/"/>
                            </div>

                            <div className="col-lg-6 pt-5" style={{textAlign:"left"}}>
                                <p>The list of Tests commonly undertaken:</p>
                                <ul className="pt-3" >
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Total Yeast mould count</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Total coliform</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Total Plate count</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Total Sulphite reducing bacteria</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Aerobic & anaerobic count</li>
                                </ul>
                            </div>
                        </div>
                        {/*end of row2*/}

                        <div className="row pb-5">
                            <div className="col-lg-6">
                            <ul className="ul-list" style={{textAlign:"left"}}>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Swab testing for surface and Air quality.</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Nutritional Analysis of food</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Organoleptic tests</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Moisture, pH, Ash, acidity, energy etc.</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Shelf Life study</li><br/>
                                <li><i class="fas fa-check-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Analysis of food Contaminants</li><br/>
                            </ul>
                            </div>

                            <div className="col-lg-6">
                                <img src={qt3} className="img-fluid" alt="/"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quality;