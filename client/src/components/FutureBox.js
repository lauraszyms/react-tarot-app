import React from 'react'

export default (props) => {

  const handleOnClick = () => {
    props.store.dispatch({ type: 'ADD_CARD' });
  }

  return (
      <div className="Future-box" onClick={handleOnClick}>{props.store.getState().cardLink}</div>
  )
};
