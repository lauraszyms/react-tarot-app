import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions.js'
import { cardsFetchData } from '../actions/actions';
import Navbar from '../components/Navbar';



export class Reading extends Component {

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
          <div className="Reading">
          <Navbar/>
           <div className="w3-row-padding w3-center">
            <div className="w3-col m3" onClick={handleClick()}>
             {this.props.cards.map((card) => (
               card.id === pastId ? <img key={card.id} className="w3-border w3-padding w3-hover-opacity" style={{width: '100%'}} alt={card.name} src={card.img}/> : null
             ))}
            </div>
            <div className="w3-col m3" onClick={handleClick()}>
             {this.props.cards.map((card) => (
               card.id === presentId ? <img key={card.id} className="w3-border w3-padding w3-hover-opacity" style={{width: '100%'}} alt={card.name} src={card.img}/> : null
             ))}
            </div>
            <div className="w3-col m3" onClick={handleClick()}>
             {this.props.cards.map((card) => (
               card.id === futureId ? <img key={card.id} className="w3-border w3-padding w3-hover-opacity" style={{width: '100%'}} alt={card.name} src={card.img}/> : null
             ))}

          </div>
         </div>
        </div>
      );
      debugger
  }
}

const handleClick = () => {
  <div id="modal01" className="w3-modal w3-black" onclick="this.style.display='none'">
    <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i className="fa fa-remove"></i></span>
    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" className="w3-image"/>
      <p id="caption" className="w3-opacity w3-large"></p>
    </div>
  </div>
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
        fetchData: (url) => dispatch(cardsFetchData(url))
    };
};

const ReadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reading);

export default connect(mapStateToProps, mapDispatchToProps)(Reading);
