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
           <div className="Navbar">
            <div className="w3-top">
             <div className="w3-bar" id="myNavbar">
              <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
               <i className="fa fa-bars"></i>
              </a>
              <a href="http://localhost:3000" className="w3-bar-item w3-button">HOME</a>
              </div>
             <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            </div>
           </div>
          </div>

          <div className="w3-content w3-container w3-padding-64" id="readings">
           <h3 className="w3-center">Golden Thread Tarot</h3>
           <p className="w3-center"><em>Learn more about each card with the cntemporary Gold Thread deck.</em></p><br/>
          </div>

           <div className="w3-row-padding">
            <div className="w3-col m3">
             {this.props.cards.map((card) => (
               <div>
                <img src={card.img} className="thumbnail responsive" className="w3-hover-opacity" alt="Golden Thread Tarot" style={{display: 'block', height: '220px', width: '151px', marginRight: 'auto', marginLeft: '630px',}}/>
               <div style={{width: '100%', marginRight: 'auto', marginLeft: '550px',}}>
                <p><b/><i className="fa fa-star-half-full w3-center" ></i>{card.name}-<b/><em>{card.key_words}</em></p>
                </div>
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
