import React from 'react';




class About extends React.Component {

  handleClick = () => {
    window.location.assign('http://localhost:3000/golden-thread');
  }

   render() {
      return (
        <div className="About">
         <div className="w3-content w3-container w3-padding-64" id="about">
          <h3 className="w3-center w3-rosy-brown">ABOUT ME</h3>
          <p className="w3-center"><em>Welcome to Tarot.</em></p>
          <p>Me.<br/><br/>I have been reading tarot for over three years, but have been interested in the art of tarot long before. I got my start using the classic Rider Waite tarot deck, originally published in 1910 and one the most popular. When most people think of tarot they are thinking of
           the Rider Waite deck. I have since begun using the Golden Thread tarot deck by Labyrinthos Academy which is a beautiful contempory deck desined with modern lines and gold leaf. During in person readings I am happy to use either deck of preference. </p>

          <div className="w3-row">
            <div className="w3-col m6 w3-center w3-padding-large">
              <p><b/><i className="fa fa-star-half-full w3-margin-right"></i>Golden Thread Deck -<b/><em> Click to learn more</em></p>
              <img onClick={this.handleClick} src="https://i.imgur.com/Ek9GIkO.png" className="w3-round w3-image w3-hover-opacity" alt="Photo of Me" width="500" height="333"/>
            </div>
          </div>

          <div className="w3-col m6 w3-hide-small w3-padding-large w3-right">
            <p>Tarot.<br/><br/>Most people think of tarot as fourtune telling but there are minimal predictive cards in the readings I do.
              Tarot was created to symbolize the universal struggles and truths that are common to the human experience. Less fortune telling and more advice giving,
              there is still an esoteric and mysterious art to reading the tarot cards. However, we must always remember our agency, the cards are mearly a tool for searching within ourselves and our situations and to use caution to remain responisble for our actions despite what the cards tell us. </p>
          </div>

          <div className="w3-row w3-center w3-rosy-brown w3-padding-16">
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">78+</span><br/>
              Cards
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">500+</span><br/>
              Readings Done
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">89+</span><br/>
              Happy Clients
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">150+</span><br/>
              Stars Aligned
            </div>
          </div>

          </div>
        </div>
      );
    }
  }

  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }



export default About;
