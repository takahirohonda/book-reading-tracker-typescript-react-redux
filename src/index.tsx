import '../public/css/bootstrap.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App';

import { createStore, compose } from 'redux';
import { Provider }from 'react-redux';

import reducer from './reducers'

let composeEnhancers

// composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// let store = createStore(reducer, composeEnhancers())

let store = createStore(reducer)

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>, 
    document.getElementById('react')
)