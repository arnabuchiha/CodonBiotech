import { Component } from 'react';
import './App.css';
import React from "react"
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Aboutus from "./components/Aboutus";
import Footer from './components/Footer/Footer';
import Rnd from "./components/RnD.js";
import TK from "./components/TK.js";
import Training from "./components/Training.js";
import Quality from "./components/Quality.js";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
        <Nav/>
        
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={Aboutus}/>
            <Route path="/biotech-rnd" component={Rnd}/>
            <Route path="/biotech-tk" component={TK}/>
            <Route path="/tpd" component={Training}/>
            <Route path="/quality-testing" component={Quality}/>
          </Switch>
          {/* <Footer/> */}
        <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;
