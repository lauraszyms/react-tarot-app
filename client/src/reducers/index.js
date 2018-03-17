import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsIsLoading, addFutureCard } from './CardReducer';

const rootReducer = combineReducers({

  cards,
  cardsHasErrored,
  cardsIsLoading,
  addFutureCard
});

export default rootReducer;
