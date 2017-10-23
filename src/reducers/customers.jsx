import R from "ramda"

import {
	FETCH_CUSTOMERS_SUCCESS,
	ADD_CUSTOMERS_SUCCESS
} from '../actionTypes'

const initialState = []



export default (state = initialState, {type, payload}) => {
    switch (type) {
		case FETCH_CUSTOMERS_SUCCESS:
			return payload
        default:
            return state
    }
}
