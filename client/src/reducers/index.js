import { combineReducers } from 'redux';
import cardsReducer from './cardReducer';

const rootReducer = combineReducers({
  cards: cardsReducer
});

export default rootReducer;
