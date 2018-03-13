import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import cardReducer from './reducers/cardReducer';
import createStore from './createStore';

  const store = createStore(cardReducer);

  export function render() {
    ReactDOM.render(
      <Provider store={store}>
       <App store={store}/>
      </Provider>,
      document.getElementById('root')
    );
  };

  store.dispatch({ type: '@@INIT' });
