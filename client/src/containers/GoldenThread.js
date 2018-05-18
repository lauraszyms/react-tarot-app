import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { cardsFetchData } from '../actions/actions';
import { Link } from 'react-router-dom';
import Card from '../components/Card';



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
              <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" title="Toggle Navigation Menu">
               <i className="fa fa-bars"></i>
              </a>
              <Link to="/" className="w3-bar-item w3-button">HOME</Link>
              </div>
             <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            </div>
           </div>
          </div>

          <div className="w3-content w3-container w3-padding-64" id="readings">
           <h3 className="w3-center">Golden Thread Tarot</h3>
           <p className="w3-center"><em>Learn more about each card with the contemporary Golden Thread deck.</em></p><br/>
          </div>

           <div className="w3-row-padding">
            <div className="w3-col m3">
             {this.props.cards.map((card) => (
               <Card card={card} key={card.id}/>
             ))}
            </div>
           </div>
          </div>
      );
  }
}


const mapStateToProps = (state) => {

    return {
        cards: state.cards.index,
        hasErrored: state.cards.hasErrored,
        isLoading: state.cards.isLoading,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(cardsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoldenThread);
