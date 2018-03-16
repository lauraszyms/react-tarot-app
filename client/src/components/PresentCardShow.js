import React from 'react'

const PresentCardShow = (props) => {

  const handlePresentOnClick = () => {
    props.store.dispatch({ type: 'ADD_PRESENT_CARD' });
  }

  return (
      <div onClick={handlePresentOnClick}>
       
      </div>
  )
};

export default PresentCardShow
