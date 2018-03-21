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

export function createComment(data) {
  console.log(JSON.stringify(data))
    return fetch('http://localhost:3001/comments', {
        method: 'POST',
        mode: 'CORS',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function addLike(card) {
  console.log(JSON.stringify({card}))
    let url = `http://localhost:3001/cards/${card.id}`
    return fetch(url, {
        method: 'PUT',
        mode: 'CORS',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({card})
    }).then(res => {
        return res;
    }).catch(err => err);
}
