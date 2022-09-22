import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/home";
import Homescreen from "./components/homescreen";
import Resume from "./components/resume";
import AboutMe from "./components/aboutMe";
import Portfolio from "./components/portfolio";
import ArtWork from "./components/artwork";
import Contact from "./components/contact";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/monitor" element={<Homescreen />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/art" element={<ArtWork />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>        
      </div> 
    </Router> 
  );
}

export default App;
