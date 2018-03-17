import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions.js'
import { cardsFetchData } from '../actions/actions';
import Navbar from '../components/Navbar';



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
          <Navbar/>
           <div className="w3-row-padding w3-center">
            <div className="w3-col m3">
             {this.props.cards.map((card) => (
               <div>
               <img src={card.img} className="thumbnail responsive" className="w3-hover-opacity" alt="Golden Thread Tarot" style={{display: 'block', height: '220px', width: '151px', marginRight: 'auto', marginLeft: 'auto'}}/>
                <p><b/><i className="fa fa-star-half-full w3-margin-right"></i>{card.name}-<b/><em>{card.key_words}</em></p>
               </div>
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
        fetchData: (url) => dispatch(cardsFetchData(url))
    };
};

const GoldenThreadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoldenThread);

export default connect(mapStateToProps, mapDispatchToProps)(GoldenThread);
