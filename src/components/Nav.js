import React from 'react';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
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
                        <img src={logo} width="auto" height="80"/>
                    </a>
                    </div>
                    <div class="float-right">
                        <div className="social-links phone-number">
                            <span className="d-flex phone-number">
                                <i className="fas fa-phone-alt"></i>
                                <p>9811668417 / 0120-4525825</p>
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
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className={`nav-link`} 
                    activeClassName="active"
                    exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link`} 
                    activeClassName="active"
                    to="/aboutus">About Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link `} 
                    activeClassName="active"
                    to="/biotech-rnd">R&D</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link `} 
                    activeClassName="active"
                    to="/biotech-tk">Manufacturing Kits</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link `} 
                    activeClassName="active"
                    to="/tpd">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link `} 
                    activeClassName="active"
                    to="/quality-testing">Quality Testing</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link `} 
                    activeClassName="active"
                    to="/bio-com-units">Bio Composting Units</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={`nav-link `} 
                    activeClassName="active"
                    to="/contact">Contact Us</NavLink>
                </li>
                </ul>
            </div>
      </nav>
      </div>
    );
  }
}
export default Nav;