import React from "react";
import "../assets/styles/contactus.css";
class Contact extends React.Component{
    render(){
        return(
            <div className="contact-comp mb-4 mt-5">
                <h1>Contact</h1>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="footer col-md-6 col-xs-12" style={{backgroundColor:"white"}}>
                            <div className="sub-heading">
                                <h4 style={{color:"black"}}>General Info</h4>
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
                                    <p>9811668417</p>
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
                        <div className="for-before col-md-6 col-xs-12">
                        <form className="container form-box form-box-contactus">
                            <div className="sub-heading">
                                <h4 style={{color:"black"}}>Get More Info</h4>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                            </div>
                            <div className="form-group">
                                <input type="Email" className="form-control" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message" style={{minHeight:"20vh"}}></textarea>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Contact;