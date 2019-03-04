import '../public/css/bootstrap.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App';
import { createStore, compose } from 'redux';
import { Provider }from 'react-redux';

import reducer from './reducers'

let composeEnhancers

declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;

composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 

const store = createStore(reducer, composeEnhancers())

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>, 
    document.getElementById('root')
)
