import * as types from "../actionTypes"

import {
    fetchCustomersApi
} from '../api'


export const fetchCustomers = () => async dispatch => {
    dispatch({type: types.FETCH_CUSTOMERS_START})

    try {
        const data = await fetchCustomersApi()
        dispatch({
            type: types.FETCH_CUSTOMERS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: types.FETCH_CUSTOMERS_FAILURE,
            payload: err,
            error: true
        })
    }
}
