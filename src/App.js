import { Component } from 'react';
import './App.css';
import React from "react"
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Aboutus from "./components/Aboutus"
import Footer from './components/Footer/Footer';
import Rnd from "./components/RnD.js"
import Contact from './components/Contact';
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
            <Route path="/contact" component={Contact}/>
          </Switch>
          {/* <Footer/> */}
        <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;
