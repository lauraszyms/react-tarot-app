import React from 'react'


const FutureCardShow = (props) => {

  const handleFutureOnClick = () => {
    props.store.dispatch({ type: 'ADD_FUTURE_CARD' });
  }

  return (
      <div onClick={handleFutureOnClick}>{props.store.getState().futureCardLink}</div>
  )
};

export default FutureCardShow 
