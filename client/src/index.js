import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reading from './containers/Reading';
import { Provider } from 'react-redux';
import GoldenThread from './containers/GoldenThread';
import Comments from './containers/Comments';
import Home from './components/Home';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'


const history = createHistory()
const middleware = routerMiddleware(history)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, middleware)
));



      ReactDOM.render(
        <Provider store={store}>
         <ConnectedRouter history={history}>
          <div>
           <Route exact path="/" component={Home} store={store}/>
           <Route path="/reading" component={Reading}/>
           <Route path="/golden-thread" component={GoldenThread}/>
           <Route path="/comments" component={Comments}/>
          </div>
         </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
      );
