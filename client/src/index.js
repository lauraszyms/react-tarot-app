import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import CardList from './components/cardList';


  const store = createStore(rootReducer, {cards: []}, applyMiddleware(thunk));



      ReactDOM.render(
        <Provider store={store}>
         <App />
        </Provider>,
        document.getElementById('root')
      );


    store.dispatch({ type: '@@INIT' });
