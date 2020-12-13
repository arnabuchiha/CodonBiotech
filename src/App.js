import { Component } from 'react';
import './App.css';
import React from "react"
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Aboutus from "./components/Aboutus"
class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
        <Nav/>
        
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={Aboutus}/>
          </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
    )
  }
}

export default App;
