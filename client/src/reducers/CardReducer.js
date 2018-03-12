function cardReducer(state, action){
  switch (action.type) {
    case 'ADD_CARD':
      // return {card: card random}
    case 'REMOVE_CARD':
      // return {card: card back}
    default:
      return state;
  }
}

function dispatch(action){
    state = changeState(state, action)
}

export default cardReducer;
