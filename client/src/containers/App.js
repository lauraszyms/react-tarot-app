import React, { Component } from 'react';
import './App.css';
import TarotBack from '../components/TarotBack'
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PastCardShow from '../components/PastCardShow';
import PresentCardShow from '../components/PresentCardShow';
import FutureCardShow from '../components/FutureCardShow';
import CardList from '../components/cardList'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions.js'
import { addFutureCard, cardsFetchData } from '../actions/actions';



export class App extends Component {

  componentDidMount() {
      this.props.fetchData('http://localhost:3001/cards');
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
          <div className="App">
           <div className="w3-row-padding w3-center w3-section">
            <div className="w3-col m4 l3">
             {this.props.cards.map((card) => (
               card.id === pastId ? <img key={card.id} className="w3-display-bottomleft w3-image w3-border w3-padding w3-hover-opacity" alt={card.name} src={card.img}/> : null
             ))}
            </div>
            <div className="w3-col m4 l3">
             {this.props.cards.map((card) => (
               card.id === presentId ? <img key={card.id} className="w3-display-bottommiddle w3-image w3-border w3-padding w3-hover-opacity" alt={card.name} src={card.img}/> : null
             ))}
            </div>
            <div className="w3-col m4 l3">
             {this.props.cards.map((card) => (
               card.id === futureId ? <img key={card.id} className="w3-display-bottomright w3-image w3-border w3-padding w3-hover-opacity" alt={card.name} src={card.img}/> : null
             ))}
            </div>
           </div>
          </div>
      );
      debugger
  }
}

// const handleFutureOnClick = (card) => {
//  let defaultImg = card.img
// }

function randomId() {
  let id = Math.floor((Math.random() * 14) + 1);
   return id;
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        hasErrored: state.cardsHasErrored,
        isLoading: state.cardsIsLoading,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(cardsFetchData(url)),
        futureClick: (cards) => dispatch(addFutureCard(cards))
    };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
