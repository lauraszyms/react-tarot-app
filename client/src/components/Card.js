import React from 'react';
import './App.css';
import { addLike } from '../actions/actions';
import { connect } from 'react-redux';





class Card extends React.Component {



  handleClick = () => {
    const copy = Object.assign({}, this.props.card, {likes: this.props.card.likes + 1})

    //this.props.card.likes = this.props.card.likes + 1
    this.props.fetchLike(copy);
 }

 handleTest = () => {
   console.log('A')
   fetch('http://localhost:3001/cards')
    .then(res => {
      console.log('B')
      return res.json()
    }).then(cards => {
      console.log('C')
      return cards
    })
    console.log('D')
 }

   render() {
     const { card } = this.props
      return (
        <div className="Card">
          <button onClick={this.handleTest}>Testing</button>
          <div>
            <img src={card.img} key={card.id} className="thumbnail responsive" alt="Golden Thread" style={{display: 'block', height: '220px', width: '151px', marginRight: 'auto', marginLeft: '630px',}}/>
            <div style={{width: '100%', marginRight: 'auto', marginLeft: '550px',}}>
            <p><b/><i className="fa fa-star-half-full w3-center" key={card.id}></i>{card.name}-<b/><em>{card.key_words}</em></p>
            <button className="btn btn-default" onClick={this.handleClick}>Like</button><p>{this.props.card.likes}</p>
            </div>
          </div>
        </div>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          fetchLike: (card) => dispatch(addLike(card))
      };
  };



export default connect(null, mapDispatchToProps)(Card);
