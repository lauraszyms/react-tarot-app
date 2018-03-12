let state;

function cardReducer(state = {cardLink: <img src="https://i.imgur.com/zGlHRnf.jpg" className="App-logo" alt="tarotBack"/>}, action){
  switch (action.type) {
    case 'ADD_CARD':
      return {cardLink: <img src="https://i.imgur.com/bvdxin4.jpg" className="App-logo" alt="tarotBack"/>}
    case 'REMOVE_CARD':
      return {cardLink: <img src="https://i.imgur.com/zGlHRnf.jpg" className="App-logo" alt="tarotBack"/>}
    default:
      return state;
  }
}

function dispatch(action){
  state = changeCount(state, action);
  render();
};

function render(){
  let logo = document.getElementById('App-logo');
  logo.textContent = state.cardLink;
}

dispatch({ type: '@@INIT' })
let appLogo = document.getElementById('App-logo');

appLogo.addEventListener('click', function() {
    dispatch({ type: 'ADD_CARD' });
})



export default cardReducer;
