import React from 'react';
import './App.css';
import { addLike } from '../actions/actions';





class Card extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            count: this.props.card.likes
        }
    }


  handleClick = () => {
    this.props.card.likes = this.props.card.likes + 1
    addLike(this.props.card);
    this.setState({
      count: this.props.card.likes
    });
 }

   render() {
     const { card } = this.props
      return (
        <div className="Card">
          <div>
            <img src={card.img} key={card.id} className="thumbnail responsive" alt="Golden Thread" style={{display: 'block', height: '220px', width: '151px', marginRight: 'auto', marginLeft: '630px',}}/>
            <div style={{width: '100%', marginRight: 'auto', marginLeft: '550px',}}>
            <p><b/><i className="fa fa-star-half-full w3-center" key={card.id}></i>{card.name}-<b/><em>{card.key_words}</em></p>
            <button className="btn btn-default" onClick={this.handleClick}>Like</button><p>{this.state.count}</p>
            </div>
          </div>
        </div>
      );
    }
  }



export default Card;
