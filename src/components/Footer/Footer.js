import React from "react";
import "../../assets/styles/footer.css"
import logo from "../../assets/images/logo.png";
class Footer extends React.Component{
    render(){
        return(
            <div className="footer container-fluid">
                <div className="row">
                    <div className="col-md-4 col-xs-12 contact">
                    {/* <div>
                    <a class="navbar-brand" href="#" target="_self">
                        <img src={logo} width="auto" height="70"/>
                    </a>
                    </div> */}
                    <div className="sub-heading mt-3">
                        <h4 style={{color:"black"}}>Contact</h4>
                    </div>
                        <ul className="contactus row">
                            <li>
                                <i className="fa fa-map-marker"></i>
                                <p>Codon Biotech Pvt. Ltd.
                                C- 169, C Block, Sector 63, Noida</p>
                            </li>
                            <li>
                                <i className="fa fa-envelope-o"></i>
                                <p>codonbt@gmail.com.com</p>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <p>0120 431 1464</p>
                            </li>
                        </ul>
                        <ul className="social-icons list-inline row">
                                <li class="item">
                                    <div>
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </div>
                                </li>
                                <li class="item">
                                    <div>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                </li>
                                <li class="item">
                                    <div>
                                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                                    </div>
                                </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-xs-12"> 
                        <h4 className="sub-heading mt-3">
                            Latest News
                        </h4>
                        <ul className="latest-news">
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Codon Biotech Has Signed MOU with AMITY UNIVERSITY, CHHATISGARH…for Research Collaboration and Student Training.</li>
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>SELF EMPLOYMENT GENERATING trainings start from March, 2019</li>
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Join Codon Biotech For INDUSTRIAL TRAINING, DISSERTATION, SUMMER TRAINING…</li>
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>Join Codon Biotech for PLACEMENT ORIENTED Trainings and project Work</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;