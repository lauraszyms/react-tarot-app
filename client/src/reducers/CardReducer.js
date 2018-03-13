import React from 'react'

export default function cardReducer(state = {
  cardLink: <img src="https://i.imgur.com/zGlHRnf.jpg"/>
}, action) {
  switch (action.type) {
    case 'ADD_FUTURE_CARD':
      return {cardLink: <img className="Future-box" src="https://i.imgur.com/bvdxin4.jpg"/>}
    case 'ADD_PRESENT_CARD':
      return {cardLink: <img className="Present-box" src="https://i.imgur.com/bvdxin4.jpg"/>}
    case 'ADD_PAST_CARD':
      return {cardLink: <img className="Past-box" src="https://i.imgur.com/bvdxin4.jpg"/>}
    default:
      return state;
  }
}
