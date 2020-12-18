import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import "../assets/styles/nav.css";
import logo from "../assets/images/logo.png"
class Nav extends React.Component {
  render() {    
    return (
        <div className="navigation">
        <section class="header-uper ">
            <div class="container-fluid clearfix">
                    <div>
                    <a class="navbar-brand" href="#" target="_self">
                        <img src="http://codonbiotech.com/images/logo.jpg" width="auto" height="70"/>
                    </a>
                    </div>
                    <div class="float-right">
                        <div className="social-links phone-number">
                            <span className="d-flex phone-number">
                                <i className="fas fa-phone-alt"></i>
                                <p>0120 431 1464</p>
                            </span>
                        </div>
                        <ul class="social-links">
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
            </div>
        </section>
        {/* <div class="pagewide p-3 d-none d-lg-block fixed-top">
            <div class="container-fluid">
            <a class="navbar-brand" href="#" target="_self">
                <img src="http://codonbiotech.com/images/logo.jpg" width="auto" height="70"/>
            </a>
            </div>
        </div> */}
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className={`nav-link ${window.location.pathname==""?"active":""}`} href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${window.location.pathname=="/aboutus"?"active":""}`} href="/aboutus">About Us</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${window.location.pathname=="/biotech-rnd"?"active":""}`} href="/biotech-rnd">R&D</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${window.location.pathname=="/biotech-tk"?"active":""}`} href="/biotech-tk">Teaching Kits</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${window.location.pathname=="/tpd"?"active":""}`} href="/tpd">Trainings</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${window.location.pathname=="/quality-testing"?"active":""}`} href="/quality-testing">Quality Testing</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${window.location.pathname=="/bio-com-units"?"active":""}`} href="/bio-com-units">Bio Composting Units</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${window.location.pathname=="/contact"?"active":""}`} href="/contact">Contact Us</a>
                </li>
                </ul>
            </div>
      </nav>
      </div>
    );
  }
}
export default Nav;