import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsIsLoading  } from './CardReducer';
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({

  cards,
  cardsHasErrored,
  cardsIsLoading,
  router: routerReducer
});

export default rootReducer;
