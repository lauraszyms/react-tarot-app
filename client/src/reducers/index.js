import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsIsLoading, addFutureCard } from './CardReducer';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


const rootReducer = combineReducers({

  cards,
  cardsHasErrored,
  cardsIsLoading,
  router: routerReducer
});

export default rootReducer;
