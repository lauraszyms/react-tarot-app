import React from 'react';
import './App.css';



class Readings extends React.Component {

   render() {

       let clickStyle = {
       display: 'none',
       };

      return (
        <div className="Readings">
         <div className="bgimg-2 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">READINGS</span>
          </div>
         </div>

         <div className="w3-content w3-container w3-padding-64" id="readings">
          <h3 className="w3-center">MY WORK</h3>
          <p className="w3-center"><em>Here are some of my latest in person readings.<br/> Click on the images to make them bigger</em></p><br/>
         </div>

         <div className="w3-row-padding w3-center">
           <div className="w3-col m3">
             <img src="https://i.imgur.com/AHwI0yD.png" onClick={clickStyle} className="w3-hover-opacity" alt="One Card Spread"/>
           </div>

           <div className="w3-col m3">
             <img src="https://i.imgur.com/a0XmzIo.png" onClick={clickStyle} className="w3-hover-opacity" alt="Three Card Spread"/>
           </div>

           <div className="w3-col m3">
             <img src="https://i.imgur.com/a0XmzIo.png" onClick={clickStyle} className="w3-hover-opacity" alt="Celtic Cross"/>
           </div>

           <div className="w3-col m3">
             <img src="https://i.imgur.com/AHwI0yD.png" onClick={clickStyle} className="w3-hover-opacity" alt="Love Reading"/>
           </div>
         </div>

         <div>
           <button onClick="location.href = 'http://localhost:3000/reading'; "className="w3-button w3-padding-large w3-light-grey">GET ONLINE READING</button>
         </div>

         <div id="modal01" className="w3-modal w3-black" onClick={clickStyle}>
           <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i className="fa fa-remove"></i></span>
           <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
             <img id="img01" className="w3-image"/>
             <p id="caption" className="w3-opacity w3-large"></p>
           </div>
         </div>
       </div>


      );
    }
  }



export default Readings;
