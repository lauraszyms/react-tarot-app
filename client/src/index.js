import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import cardReducer from './reducers/cardReducer';
import createStore from './createStore';

  const store = createStore(cardReducer);

  export function render() {
    ReactDOM.render(
      <App store={store} />,
      document.getElementById('root')
    );
  };

  store.dispatch({ type: '@@INIT' });
