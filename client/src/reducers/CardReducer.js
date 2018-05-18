// export function cardsHasErrored(state = false, action) {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }
// export function cardsIsLoading(state = false, action) {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }
export function cards(state = {index: [], isLoading: false, hasErrored: false}, action) {
    switch (action.type) {
        case 'CARDS_FETCH_DATA_SUCCESS':
            return {...state, index: action.cards };
        case 'LIKE_SUCCESS':
            return {...state, index: state.index.map((card) => card.id === action.card.id ? action.card : card)}
            // const cardToReplace = state.find(function(card){ return card.id === action.card.id})
            // const index = state.indexOf(cardToReplace)
            // const newState = Object.assign([], state)
            // newState[index] = action.card
            // return newState
        case 'CARDS_IS_LOADING':
          return {...state, isLoading: action.isLoading};
        case 'CARDS_HAS_ERRORED':
          return {...state, hasErrored: action.hasErrored}
        default:
            return state;
    }
}

// export function likes(state = [], action) {
//     switch (action.type) {
//         case 'ADD_LIKE':
//         debugger
//             return action.addLike;
//         default:
//             return state;
//     }
// }
