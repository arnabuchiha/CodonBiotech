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
                    <div className="sub-heading mt-5">
                        <h4 style={{color:"black"}}>Contact</h4>
                    </div>
                        <ul className="contactus row">
                            {/* <li className="col-12">
                                <i className="fa fa-map-marker"></i>
                                <p>Codon Biotech Pvt. Ltd.
                                C- 169, C Block, Sector 63, Noida</p>
                            </li> */}
                            <li className="col-12">
                                <i className="fa fa-envelope-o"></i>
                                <p>codonbt@gmail.com.com</p>
                            </li>
                            <li className="col-12">
                                <i className="fas fa-phone-alt"></i>
                                <p>9811668417 / 0120-4525825</p>
                            </li>
                            {/* <li className="col-12">
                                <i className="fas fa-tty"></i>
                                <p>0120-4525825</p>
                            </li> */}
                            <li className="col-12">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>B-38, Sector - 64, Noida, Uttar Pradesh</p>
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
                        <h4 className="sub-heading mt-5">
                            Latest News
                        </h4>
                        <ul className="latest-news">
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>
                                CODON BIOTECH Make Kits NOW AVAILABLE ON AMAZON
                            </li><br/>
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}></i>
                                STARTING OF QUALITY TESTING LAB ( In process of getting NABL)
                            </li><br/>
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}>
                                </i>JOB ORIENTED TRAINING AND INTERNSHIP AVAILABLE.</li>
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}>
                                </i>ONLINE & OFFLINE PROJECT BASED INTERNSHIP AVAILABLE.</li>
                            <li><i class="far fa-dot-circle" style={{color:"#5dd39e", padding:"5px"}}>
                                </i>ONLINE / VIRTUAL WET LAB WORKSHOPS  AVAILABLE  FOR COLLEGES.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;