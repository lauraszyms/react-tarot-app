import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import CardList from './components/cardList';
import configureStore from './store/configureStore';


const store = configureStore();



      ReactDOM.render(
        <Provider store={store}>
         <App />
        </Provider>,
        document.getElementById('root')
      );


    store.dispatch({ type: '@@INIT' });
