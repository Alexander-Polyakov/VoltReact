import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import reducers from "reducers"
import App from 'app/index'

import 'react-select/dist/react-select.css'


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))


ReactDOM.render(
    <Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
    </Provider>,
	document.getElementById('app-root')
);


