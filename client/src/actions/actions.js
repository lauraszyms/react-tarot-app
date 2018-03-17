import React from 'react'
import fetch from 'isomorphic-fetch';


export function cardsHasErrored(bool) {
    return {
        type: 'CARDS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function cardsIsLoading(bool) {
    return {
        type: 'CARDS_IS_LOADING',
        isLoading: bool
    };
}
export function cardsFetchDataSuccess(cards) {
    return {
        type: 'CARDS_FETCH_DATA_SUCCESS',
        cards
    };
}

export function cardsFetchData(url) {
    return (dispatch) => {
        dispatch(cardsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(cardsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((cards) => dispatch(cardsFetchDataSuccess(cards)))
            .catch(() => dispatch(cardsHasErrored(true)));
    };
}

export function addFutureCard(){
  return {
    type: "ADD_FUTURE_CARD"
  }
}


export function addPresentCard(){
  return {
    type: "ADD_PRESENT_CARD"
  }
}



export function addPastCard(){
  return {
    type: "ADD_PAST_CARD"
  }
}
