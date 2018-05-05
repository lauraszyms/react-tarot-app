export function cards(state = {index: [], isLoading: false, hasErrored: false}, action) {
    switch (action.type) {
        case 'CARDS_FETCH_DATA_SUCCESS':
            return {...state, index: action.cards };
        case 'CARDS_IS_LOADING':
          return {...state, isLoading: action.isLoading};
        case 'CARDS_HAS_ERRORED':
          return {...state, hasErrored: action.hasErrored}
        default:
            return state;
    }
}
