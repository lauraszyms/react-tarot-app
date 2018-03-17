import React, { Component } from 'react';
import './App.css';
import TarotBack from '../components/TarotBack'
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PastCardShow from '../components/PastCardShow';
import PresentCardShow from '../components/PresentCardShow';
import FutureCardShow from '../components/FutureCardShow';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions.js'
import { addFutureCard, cardsFetchData } from '../actions/actions';



export class GoldenThread extends Component {

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
          <div className="golden-thread">
           <div className="w3-row-padding w3-center w3-section">
            <div className="w3-col m4 l3">
             {this.props.cards.map((card) => (
               <img src={card.name} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>
             ))}
            </div>
           </div>
          </div>
      );
  }
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

const GoldenThreadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoldenThread);

export default connect(mapStateToProps, mapDispatchToProps)(GoldenThread);
