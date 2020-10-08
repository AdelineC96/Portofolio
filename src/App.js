import React from 'react';
import Home from "./Components/index"
import "./App.css"
import {Route} from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline"
import Resume from "./Components/Resume"
import Scroll from "./Scroll";
import AboutMe from "./Components/AboutMe"
import Portfolio from"./Components/Portfolio"
import Contact from "./Components/ContactMe"

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/aboutme" component={AboutMe}/>
    <Route path="/projects" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
    <Scroll showBelow={50}/>
    </>
  );
}

export default App;
