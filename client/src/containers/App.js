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
    // debugger
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
          <header className="App-header">
            </header>
            <div>
            {this.props.cards.map((card) => (
               card.id === pastId ? <img key={card.id} className="Past-box" alt={card.name} src={card.img}/> : null
            ))}
            </div>
            <div>
            {this.props.cards.map((card) => (
               card.id === presentId ? <img key={card.id} className="Present-box" alt={card.name} src={card.img}/> : null
            ))}
            </div>
            <div>
            {this.props.cards.map((card) => (
               card.id === futureId ? <img key={card.id} className="Future-box" alt={card.name} src={card.img}/> : null
            ))}
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
        cards: state.cards,
        hasErrored: state.cardsHasErrored,
        isLoading: state.cardsIsLoading,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(cardsFetchData(url)),
        futureClick: (card) => dispatch(addFutureCard(card))
    };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
