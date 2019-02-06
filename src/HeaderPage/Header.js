import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
   return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="navbar-header">
            <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse"
                    data-target="#main-nav">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a href="#" className="navbar-brand scroll-top logo"><b>Neu Profile</b></a>
          </div>
          <div id="main-nav" className="collapse navbar-collapse">
            <ul className="nav navbar-nav" id="mainNav">
              <li className="active"><a href="#home" className="scroll-link">Home</a></li>
              <li><a href="#aboutUs" className="scroll-link">About Us</a></li>
              <li><a href="#skills" className="scroll-link">Skills</a></li>
              <li><a href="#experience" className="scroll-link">Experience</a></li>
              <li><a href="#portfolio" className="scroll-link">Portfolio</a></li>
              <li><a href="#contactUs" className="scroll-link">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
  }
}

export default Header;