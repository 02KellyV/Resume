import React, { Component } from 'react';


import './App.css';
import Banner from'./BannerPage/Banner';
import Header from'./HeaderPage/Header';
import Bio from'./BioPage/Bio';
import About from'./AboutPage/About';
import Quote from'./QuotePage/Quote';
import Skill from'./SkillsPage/Skill';
import Experience from'./ExperiencePage/Experience';
import Events from'./EventsPage/Events';
import Contact from'./ContactPage/Contact';
import Footer from'./FooterPage/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Bio/>
        <About/>
        <Quote/>
        <Skill/>
        <Experience/>
        <Events/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
