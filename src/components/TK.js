import { Component } from 'react';
import React from "react";
import Slider from './Slider/Slider';
import slide1 from "../assets/images/home_slide1.jpg";
import slide2 from "../assets/images/home_slide2.jpg";
import slide3 from "../assets/images/home_slide3.jpg";

class TK extends React.Component{
    render(){
        return(
            <div className="TK">
                 <div className="container-fluid home-slider">
                    <Slider slides={[slide1,slide2,slide3]}/>
                </div><br/><br/>

                
            </div>
        )
    }
}

export default TK;