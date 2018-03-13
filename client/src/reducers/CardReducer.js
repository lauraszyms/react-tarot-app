import React from 'react'

export default function cardReducer(state = {
  cardLink: <img src="https://i.imgur.com/zGlHRnf.jpg" className="Future-box" alt="tarotBack"/>
}, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {cardLink: <img src="https://i.imgur.com/bvdxin4.jpg" className="Future-box" alt="tarotBack"/>}
    default:
      return state;
  }
}
