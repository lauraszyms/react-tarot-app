import React from 'react'
import { connect } from 'react-redux';


const FutureCardShow = () => {

  const handleFutureOnClick = () => {
    this.props.dispatch({ type: 'ADD_FUTURE_CARD' });
  }
// debugger
  return (

       <img className="Future-box" src="https://i.imgur.com/zGlHRnf.jpg"/>

  )
};

export default FutureCardShow
