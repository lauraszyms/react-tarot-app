
import { combineReducers } from 'redux';
import { cards } from './CardReducer';
import comments from './CommentsReducer';
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  cards,
  comments,
  router: routerReducer
});

export default rootReducer;
