import React from 'react'

const PresentCardShow = (props) => {

  const handlePresentOnClick = () => {
    props.store.dispatch({ type: 'ADD_PRESENT_CARD' });
  }

  return (
      <div onClick={handlePresentOnClick}>
       <img className="Present-box" src={props.store.getState().presentCardLink}/>
      </div>
  )
};

export default PresentCardShow
