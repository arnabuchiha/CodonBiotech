import React from "react";
import Slider from './Slider/Slider';
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";
import bcu1 from "../assets/images/composting.png"

class Bcu extends React.Component{
    render(){
        return(
            <div className="Bcu">
                <div className="container-fluid home-slider">
                    <Slider slides={[slide1,slide2,slide3]}/>
                </div>

                <div className="container-fluid" style={{backgroundColor:"rgb(245, 245, 245)"}}>
                    <div className="subheading pt-5">
                        <h2>BIO-COMPOSTING UNITS</h2>
                    </div>

                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="col-lg-8" style={{textAlign:"left"}}>
                                <p>Bio-Composting is the process of breaking down the organic matter (vegetable and food waste)
                                     in the presence or absence of air, using microorganisms and small insects present in nature.
                                      The end product is called compost which is rich in readily usable plant nutrients forming
                                       a part of healthy soil. When applied to soil, this compost provides nutrients to soil.</p>

                                <p>Bio-Compost increases agricultural productivity, improved soil biodiversity, reduced ecological
                                     risks and a better environment. It destroys pathogens and reduces the volume of waste.</p>

                                <p>Bio- Compost can be easily made at Home/ Restaurants/ Canteens from daily waste vegetables & Fruits.</p>
                                <p>The COMPOSTING UNIT requires a COMPOST MAKER & COMPOST ADDITIVE for its functioning.</p>
                                <p>ach UNIT includes a Facilitator Guide which contains overview, materials list, and preparation 
                                    steps, followed by clear, step-by-step instructions for effective hands on application.</p>

                                <p>***** ORDERS Can be Given by MAIL OR PHONE</p>
                            </div>

                            <div className="col-lg-4">
                                <img src={bcu1} className="img-fluid" alt="/"/>
                            </div>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bcu; 