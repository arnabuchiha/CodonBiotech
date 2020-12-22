import { Component } from 'react';
import React from "react";
import "../assets/styles/aboutus.css";
import Slider from './Slider/Slider';
import slide1 from "../assets/images/aboutus1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
/*import slide3 from "../assets/images/aboutus2.jpg";*/
import slide4 from "../assets/images/aboutus3.jpg";
import AKBhatnagar from "../assets/images/AKBhatnagar.jpg"
import OPLal from "../assets/images/OPLAL.jpg"
import TriptiBhatnagar from "../assets/images/TriptiBhatnagar.jpg"

class Aboutus extends Component {
    render(){
      return(
          <div className="Aboutus">
            <div className="container-fluid home-slider">
                    <Slider slides={[slide1,slide2,slide4]}/>
            </div>

            
            <div className="container-fluid" style={{backgroundColor:"#F5F5F5"}}>
            <h2 className="heading pt-5">DIRECTORS</h2><br/><br/>
              <div className="container">
              <div className="row mt-5">
                <div className="col-lg-8" style={{textAlign:"left"}}>
                  <h6>DR. A. K. Bhatnagar</h6>
                  <ul>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Retired as Director (Research) Indian Oil Corporation, Faridabad</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>In December 2010 he received Life Time Achievement Award for Research & Development by Ministry of Petroleum & Natural Gas, Govt. of India.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Post retirement, worked in IIT Delhi as Petrotech chair Professor, at Hindustan Petroleum Coorporation as advisor (R&D) and Reliance Industries Ltd as Senior Vice President and Head R&D.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>His invention of Titanium Complex Grease was conferred four prestigious national and international awards, namely, NRDC Republic Day Award, UN-WIPO Award, Indian Chemical Manufacturer’s Association Award and FICCI Award.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>His work on a new calcium complex high temperature grease and energy efficient Rail Road Oil respectively was also selected for national awards by Department of Scientific and Industrial Research, Govt. of India.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>He has over 70 national and international patents, has over 150 publications.</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <img src={AKBhatnagar} className="img-fluid"/>
                </div>
              </div><br/><br/>
              {/*end of row1*/}

              <div className="row pt-3">
                <div className="col-lg-8" style={{textAlign:"left"}}>
                  <h6>DR. O. P. LAL</h6>
                  <ul>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Retired as Professor/ Head Entomology Department, I.A.R.I, New Delhi</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>PhD in 1969 from Tropical Institute, Giessen Univ., West Germany.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Served as Head, I.A.R.I., Regional station, Katrain, Kullu Valley, H.P.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Worked on deputation from Indian Government as expert in plant protection with the Ministry Of Agriculture, Libya</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Was also a consultant with ICARDA, Syria, Ministry of Agriculture, Iraq and visiting Professor in University of Bonn and University of Hannover, Germany.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Awarded Alexander von Humboldt Foundation Senior.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Fellowship from Germany in 1983 on international basis in recognition of his scientific contribution.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Awarded HARDF Award for outstanding research works in agricultural sciences (Integrated Pest Management) for the year 1994..</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>He has around 200 research papers in Indian and International Journals to his credit.</li>
                  </ul>
                </div>
                <div className="col-lg-4 pt-3">
                  <img src={OPLal} className="img-fluid"/>
                </div>
              </div><br/><br/>
              {/*end of row2*/}

              <div className="row pt-3 pb-5">
                <div className="col-lg-8 " style={{textAlign:"left"}}>
                  <h6>DR. Tripti Bhatnagar</h6>
                  <ul>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Dr. Tripti has more than 17 years of experience in Research and academics.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>An aluminous of the prestigious Indian Agriculture Research Institute.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>She is the Gold medalist from the Institute for Outstanding Research and Academic performance.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Initially,served as Head of the Biotech Department at IMS, Ghaziabad.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Dr. Tripti Bhatnagar resigned from the college to start the company Codon Biotech Pvt. Ltd. along with its other directors.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>She has around 50 research papers and 3 patents to her credit.</li>
                    <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>In the 8th Women Entrepreneurs Conference by Delhi Management Association, Dr. Tripti Bhatnagar was awarded the Women Entrepreneur Achievers Award for 2018.</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <img src={TriptiBhatnagar} className="img-fluid"/>
                </div>
              </div>
              </div>
            </div>
          </div>
      )
    }
}

export default Aboutus; 