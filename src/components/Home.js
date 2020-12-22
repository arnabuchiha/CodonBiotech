import { Component } from 'react';
import React from "react";
import "../assets/styles/home.css";
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";
import home_img from "../assets/images/home_img.jpg"
import Slider from './Slider/Slider';
import ach_bg from "../assets/images/ach-bg.jpg";

class Home extends Component {
  render(){
    return(
      <div className="Home">
          <div  class="container-fluid pt-5 pb-5" style={{backgroundColor:"rgb(245, 245, 245)", padding: "20px"}}>
        <div class="container" >
                    <div class="row" >
                    <div class="col-lg-6">
                        <img src={home_img} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                        
                        <p>Codon Biotech Pvt. Ltd. (CBPL) is a company incorporated v/s section 75 of Companies Act, 1956. 
                          It was established in 2007 with an aim to encourage Biotechnology related research, product development
                           and Skill development which would lead to bridging the gap between Academics & Industry.
                           Codon Biotech Pvt. Ltd. has been formed by directors who are of great repute in their 
                           respective scientific fields where throughout their life time they have participated in research in research and development.</p>
                        <a href="#"><button type="button" className="btn btn-primary" >More About us</button></a>
                    </div>
                </div>
        </div><br/>
        </div>

        <div style={{backgroundImage:`url(${ach_bg})`}}>
        <div className="container achievements pt-5 pb-5">
          <div className="subheading">
            <h2 style={{paddingTop:"10px", fontFamily:"'Oswald', 'Times New Roman', Times, serif"}}>ACHIEVE<span style={{color:"#5dd39e"}}>MENTS</span></h2><br/>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="icon-box"><i class="fab fa-creative-commons-zero"></i></div>
              <h6>ZERO DEBT COMPANY</h6>
            </div>
            <div className="col-lg-4">
            <div className="icon-box"><i class="far fa-newspaper"></i></div>
              <h6>AROUND 50 RESEARCH PAPERS & 3 PATENTS</h6>
            </div>
            <div className="col-lg-4">
            <div className="icon-box"><i class="fas fa-award"></i></div>
              <h6>RECOGNITION BY DSIR R&D UNIT</h6>
            </div>
          </div>
          {/*end of row*/}
          <div className="row">
            <div className="col-lg-4">
              <div className="icon-box"><i class="fas fa-project-diagram"></i></div>
              <h6>CONTRACT RESEARCH PROJECTS</h6>
            </div>
            <div className="col-lg-4">
            <div className="icon-box"><i class="fas fa-pager"></i></div>
              <h6>GOVERNMENT GRANTS FOR PROJECTS FROM BIRAC</h6>
            </div>
          </div>

          <div className="row counters">
            <div className="col-col-lg-4 col-4 text-center-4">
              <span  data-toggle="counter-up" data-content="150" style={{color:"#5dd39e"}}>60+</span>
              <p>Biological Kits</p>
            </div>
            <div className="col-col-lg-4 col-4 text-center-4">
              <span  data-toggle="counter-up" data-content="150" style={{color:"#5dd39e"}}>40+</span>
              <p>Unique School Kits</p>
            </div>
            <div className="col-col-lg-4 col-4 text-center-4">
              <span  data-toggle="counter-up" data-content="150" style={{color:"#5dd39e"}}>10+</span>
              <p>Bacterial Composting Units</p>
            </div>
          </div><br/><br/><br/>
        </div>
        </div>
        

      </div>
    )
  }
}

export default Home;
