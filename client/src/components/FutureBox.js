import React from 'react'

export default (props) => {

  const handleOnClick = () => {
    props.store.dispatch({ type: 'ADD_CARD' });
  }

  return (
      <div onClick={handleOnClick}>{props.store.getState().cardLink}</div>
  )
};
