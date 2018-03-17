import React from 'react';
import './App.css';




class Navbar extends React.Component {

   render() {
      return (
        <div className="Navbar">
         <div className="w3-top">
          <div className="w3-bar" id="myNavbar">
            <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
              <i className="fa fa-bars"></i>
            </a>
            <a href="http://localhost:3000" className="w3-bar-item w3-button">HOME</a>
            <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</a>
            <a href="#readings" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> READINGS</a>
            <a href="#contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</a>
          </div>


          <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            <a href="#about" className="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
            <a href="#readings" className="w3-bar-item w3-button" onclick="toggleFunction()"></a>
            <a href="#contact" className="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
          </div>
        </div>
       </div>
      );
    }
  }



export default Navbar;
