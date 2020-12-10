import { Component } from 'react';
import React from "react";
import "../assets/styles/home.css";
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";
import home_img from "../assets/images/home_img.jpg"

class Home extends Component {
  render(){
    return(
      <div className="Home">
        <div className="container-fluid home-slider">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={slide1} alt="First slide"/>
                        <div className="carousel-caption">
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={slide2} alt="First slide"/>
                        <div className="carousel-caption">
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={slide3} alt="First slide"/>
                        <div className="carousel-caption">
                        </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span aria-hidden="true">
                        <i className="fas fa-long-arrow-alt-left" aria-hidden="true"></i>
                        </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span aria-hidden="true">
                        <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
        </div><br/><br/>
          
        <div class="container">
                    <div class="row">
                    <div class="col-lg-6">
                        <img src={home_img} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                        
                        <p>Codon Biotech Pvt. Ltd. (CBPL) is a company incorporated v/s section 75 of Companies Act, 1956. 
                          It was established in 2007 with an aim to encourage Biotechnology related research, product development
                           and Skill development which would lead to bridging the gap between Academics & Industry.
                           Codon Biotech Pvt. Ltd. has been formed by directors who are of great repute in their 
                           respective scientific fields where throughout their life time they have participated in research in research and development.</p>
                        <a href="#"><button type="button" className="btn btn-primary">More About us</button></a>
                    </div>
                </div>
        </div><br/><br/><br/> 

        <div className="container achievements">
          <div className="subheading">
            <h3>ACHIEVE<span style={{color:"#5dd39e"}}>MENTS</span></h3><br/>
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
    )
  }
}

export default Home;
