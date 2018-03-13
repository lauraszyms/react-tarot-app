import React from 'react'

export default function cardReducer(state = {
  futureCardLink: <img className="Future-box" src="https://i.imgur.com/zGlHRnf.jpg"/>,
  presentCardLink: <img className="Present-box" src="https://i.imgur.com/zGlHRnf.jpg"/>,
  pastCardLink: <img className="Past-box" src="https://i.imgur.com/zGlHRnf.jpg"/>
}, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        futureCardLink: <img className="Future-box" src="https://i.imgur.com/bvdxin4.jpg"/>,
        presentCardLink: <img className="Present-box" src="https://i.imgur.com/bvdxin4.jpg"/>,
        pastCardLink: <img className="Past-box" src="https://i.imgur.com/bvdxin4.jpg"/>,
      }
    default:
      return state;
  }
}
