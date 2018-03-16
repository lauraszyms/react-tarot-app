import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsIsLoading } from './cardReducer';

const rootReducer = combineReducers({
  
  cards,
  cardsHasErrored,
  cardsIsLoading
});

export default rootReducer;
