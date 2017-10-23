import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"

import customers from "./customers"
import products from "./products"



export default combineReducers({
	routerReducer,
    customers,
    products
})

