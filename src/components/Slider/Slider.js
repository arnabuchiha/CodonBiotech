import React from 'react';
import "../../assets/styles/slider.css";
import image1 from "../../assets/images/aboutus1.jpg";
import image2 from "../../assets/images/aboutus3.jpg";
import image3 from "../../assets/images/home_slide1.jpg";
import image4 from "../../assets/images/home_slide2.jpg";
import image5 from "../../assets/images/home_slide3.jpg";
import image6 from "../../assets/images/slide-4.png";
import image7 from "../../assets/images/slide-5.jpg";
import image8 from "../../assets/images/slide-6.jpg";
import image9 from "../../assets/images/slide-7.jpg";
import image10 from "../../assets/images/slide-8.png";

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slides:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]
        }
    }
    render(){
        return(
            <div id="carouselExampleIndicators" className="slider container-fluid carousel slide" data-ride="carousel">
                    {/* <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol> */}
                    <div className="carousel-inner">
                            
                    {
                        this.state.slides.map((value,index)=>
                            index!=0?(
                                <div className="carousel-item">
                                <img className="d-block w-100" src={value} alt="First slide"/>
                                <div className="carousel-caption">
                                </div>
                                </div>
                            ):(
                                <div className="carousel-item active">
                                <img className="d-block w-100" src={value} alt="First slide"/>
                                <div className="carousel-caption">
                                </div>
                                </div>
                            )
                        )
                    }
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
        )
    }
}
export default Slider;