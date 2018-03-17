import React from 'react'

export function cardReducer(state = {
  presentCardLink: "https://i.imgur.com/zGlHRnf.jpg",
  pastCardLink: "https://i.imgur.com/zGlHRnf.jpg",
  loading: false,
  cards: []
}, action) {
  switch (action.type) {
    case 'ADD_PRESENT_CARD':
      return {...state, presentCardLink: "https://i.imgur.com/bvdxin4.jpg"}
    case 'ADD_PAST_CARD':
      return {...state, pastCardLink: "https://i.imgur.com/bvdxin4.jpg"}
    default:
      return state;
  }
}

export function addFutureCard(state = {cards: []}, action) {
    switch (action.type) {
      case 'ADD_FUTURE_CARD':
        return  state
        default:
            return state;
    }
}

export function cardsHasErrored(state = false, action) {
    switch (action.type) {
        case 'CARDS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function cardsIsLoading(state = false, action) {
    switch (action.type) {
        case 'CARDS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function cards(state = [], action) {
    switch (action.type) {
        case 'CARDS_FETCH_DATA_SUCCESS':
            return action.cards;
        default:
            return state;
    }
}
