import React from 'react'

export default function cardReducer(state = {
  futureCardLink: "https://i.imgur.com/zGlHRnf.jpg",
  presentCardLink: "https://i.imgur.com/zGlHRnf.jpg",
  pastCardLink: "https://i.imgur.com/zGlHRnf.jpg",
  loading: false,
  cards: []
}, action) {
  switch (action.type) {
    case 'LOADING_CARDS':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_CARDS':
      return { loading: false, cards: action.payload} ;
    case 'ADD_PRESENT_CARD':
      return {...state, presentCardLink: "https://i.imgur.com/bvdxin4.jpg"}
    case 'ADD_FUTURE_CARD':
      return {...state, futureCardLink: "https://i.imgur.com/bvdxin4.jpg"}
    case 'ADD_PAST_CARD':
      return {...state, pastCardLink: "https://i.imgur.com/bvdxin4.jpg"}
    default:
      return state;
  }
}
