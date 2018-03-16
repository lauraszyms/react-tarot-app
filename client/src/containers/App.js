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
import { cardsFetchData } from '../actions/actions';


class App extends Component {
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
      return (
          <ul>
              {this.props.cards.map((card) => (
                  <li key={card.id}>
                      {card.name}
                  </li>
              ))}
          </ul>
      );
  }
}


const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        hasErrored: state.cardsHasErrored,
        isLoading: state.cardsIsLoading
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(cardsFetchData(url))
    };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
