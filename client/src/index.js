import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reading from './containers/Reading';
import { Provider } from 'react-redux';
import GoldenThread from './containers/GoldenThread';
import Home from './components/Home';
import Navbar from './components/Navbar';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


const history = createHistory()
const middleware = routerMiddleware(history)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));



      ReactDOM.render(
        <Provider store={store}>
         <ConnectedRouter history={history}>
          <div>
           <Route exact path="/" component={Home} store={store}/>
           <Route exact path="/reading" component={Reading}/>
           <Route exact path="/golden-thread" component={GoldenThread}/>
          </div>
         </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
      );
