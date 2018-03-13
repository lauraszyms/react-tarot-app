import React from 'react'

const PastCardShow = (props) => {

  const handlePastOnClick = () => {
    props.store.dispatch({ type: 'ADD_PAST_CARD' });
  }

  return (
      <div onClick={handlePastOnClick}>{props.store.getState().pastCardLink}</div>
  )
};

export default PastCardShow
