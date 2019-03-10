import '../public/css/bootstrap.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App';
import Result from './Result'
import { createStore, compose } from 'redux';
import { Provider }from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom'

import reducer from './reducers'

let composeEnhancers

declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;

composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 

const store = createStore(reducer, composeEnhancers())

ReactDOM.render(
  <Provider store = {store}>
  <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/result" component={Result} />
      </div>
  </Router>
  </Provider>, 
  document.getElementById('root')
)
