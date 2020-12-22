import { Component } from 'react';
import './App.css';
import React from "react"
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Aboutus from "./components/Aboutus";
import Footer from './components/Footer/Footer';
import Contact from './components/Contact';
import Rnd from "./components/RnD.js";
import TK from "./components/TK.js";
import Training from "./components/Training.js";
import Quality from "./components/Quality.js";
import Bcu from "./components/Bcu.js";
import Slider from './components/Slider/Slider';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.props.children)
  }
  render(){
    return(
      <div className="App">
        <Router>
        <Nav/>
          <div className="container-fluid home-slider">
                    <Slider/>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={Aboutus}/>
            <Route path="/biotech-rnd" component={Rnd}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/biotech-tk" component={TK}/>
            <Route path="/tpd" component={Training}/>
            <Route path="/quality-testing" component={Quality}/>
            <Route path="/bio-com-units" component={Bcu}/>
          </Switch>
          {/* <Footer/> */}
        <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;
