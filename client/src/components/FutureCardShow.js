import React from 'react'


const FutureCardShow = (props) => {

  const handleFutureOnClick = () => {
    props.store.dispatch({ type: 'ADD_FUTURE_CARD' });
  }

  return (
      <div onClick={handleFutureOnClick}>
      
      </div>
  )
};

export default FutureCardShow
