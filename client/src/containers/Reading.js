import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { cardsFetchData } from '../actions/actions';




export class Reading extends Component {

  componentDidMount() {
      this.props.fetchData('http://localhost:3001/cards');
  }

  handleClick = () => {
    window.location.assign('http://localhost:3000/golden-thread');
  }

  render() {
      if (this.props.hasErrored) {
          return <p>Sorry! There was an error loading the cards</p>;
      }
      if (this.props.isLoading) {
          return <p>Loading…</p>;
      }

      let pastId = randomId()
      let presentId = randomId()
      let futureId = randomId()



      return (
          <div className="Reading">
           <div className="Navbar">
            <div className="w3-top">
             <div className="w3-bar" id="myNavbar">
               <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" title="Toggle Navigation Menu">
                <i className="fa fa-bars"></i>
               </a>
               <a href="http://localhost:3000" className="w3-bar-item w3-button">HOME</a>
               </div>
              <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
             </div>
            </div>
           </div>

           <div className="w3-content w3-container w3-padding-64" id="readings">
            <h3 className="w3-center">Your Reading</h3>
            <p className="w3-center"><em>A three card spread highlighting elements of your question in the past, present, and future.<br/>Click card for description.</em></p><br/>
           </div>

           <div className="w3-row w3-center w3-rosy-brown w3-padding-16">

            <div className="w3-quarter w3-section">
             <h3 className="w3-center" style={{marginLeft: '160px', width: '100%'}}>PAST</h3>
             {this.props.cards.map((card) => (
               card.id === pastId ? <img key={card.id} className="w3-padding w3-hover-opacity" onClick={this.handleClick} style={{marginLeft: '160px', width: '100%'}} alt={card.name} src={card.img}/> : null
             ))}
            </div>

            <div className="w3-quarter w3-section">
             <h3 className="w3-center" style={{marginLeft: '180px', width: '100%'}}>PRESENT</h3>
             {this.props.cards.map((card) => (
               card.id === presentId ? <img key={card.id} className="w3-padding w3-hover-opacity" onClick={this.handleClick} style={{marginLeft: '180px', width: '100%'}} alt={card.name} src={card.img}/> : null
             ))}
            </div>

            <div className="w3-quarter w3-section">
             <h3 className="w3-center" style={{marginLeft: '200px', width: '100%'}}>FUTURE</h3>
             {this.props.cards.map((card) => (
               card.id === futureId ? <img key={card.id} className="w3-padding w3-hover-opacity" onClick={this.handleClick} style={{marginLeft: '200px', width: '100%', marginBottom: '200px'}} alt={card.name} src={card.img}/> : null
             ))}

          </div>
         </div>
        </div>
      );

  }

}



function randomId() {
  let id = Math.floor((Math.random() * 14) + 1);
   return id;
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards.index,
        hasErrored: state.cards.cardsHasErrored,
        isLoading: state.cards.cardsIsLoading,
        pastCard: state.cards.pastCard,
        presentCard: state.cards.presentCard,
        futureCard: state.cards.pastCard,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(cardsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reading);
