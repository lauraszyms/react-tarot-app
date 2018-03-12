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

function render(){
    document.setInnerHTML = state.counter
}

function dispatch(action){
    state = changeState(state, action)
    render()
}



export default cardReducer;
