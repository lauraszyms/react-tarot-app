import React from 'react';




class Contact extends React.Component {

   render() {
      return (
        <div className="Contact">
         <div className="bgimg-3 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
             <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
          </div>
         </div>

         <div className="w3-content w3-container w3-padding-64" id="contact">
           <h3 className="w3-center">IN PERSON READING</h3>
           <p className="w3-center"><em> +  I would love your feedback!</em></p>

           <div className="w3-row w3-padding-32 w3-section">
             <div className="w3-col m4 w3-container">
               <div id="notGoogleMap" className="w3-round-large w3-greyscale width:100%;height:400px;"></div>
             </div>
             <div className="w3-col m8 w3-panel">
               <div className="w3-large w3-margin-bottom">
                 <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Los Angeles, CA<br/>
                 <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: 555-555-5555<br/>
                 <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: lola@ohlolatarot.com<br/>
               </div>
               <p>Contact with questions <i className="fa fa-star-o"></i>, or for more info on in person readings:</p>
               <form action="/action_page.php" target="_blank">
                 <div className="w3-row-padding margin:0 -16px 8px -16px">
                   <div className="w3-half">
                     <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
                   </div>
                   <div className="w3-half">
                     <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email"/>
                   </div>
                 </div>
                 <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message"/>
                 <button className="w3-button w3-black w3-right w3-section" type="submit">
                   <i className="fa fa-paper-plane"></i> SEND MESSAGE
                 </button>
               </form>
             </div>
           </div>
         </div>




        </div>
      );
    }
  }



export default Contact;
