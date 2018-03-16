import React from 'react'

const PresentCardShow = (props) => {

  const handlePresentOnClick = () => {
    props.store.dispatch({ type: 'ADD_PRESENT_CARD' });
  }

  return (
      <div onClick={handlePresentOnClick}>
        <img className="Present-box" src="https://i.imgur.com/zGlHRnf.jpg"/>
      </div>
  )
};

export default PresentCardShow
