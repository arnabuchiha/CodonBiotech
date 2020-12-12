import React from 'react';
import "../../assets/styles/slider.css";
class Slider extends React.Component{
    constructor(props){
        super(props);
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
                        this.props.slides.map((value,index)=>
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