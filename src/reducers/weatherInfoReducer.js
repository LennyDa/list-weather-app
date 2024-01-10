import {ACTIONS} from '../assests/constants';

export const initialState = {
    loading: true,
    error: '',
    payload: null
}

export const weatherInfoReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_SUCCESS:
            return {
                loading: false,
                payload: action.payload,
                error: ''
            }
        case ACTIONS.FETCH_ERROR:
            return {
                loading: false,
                payload: null,
                error: 'Location was not found. No Data to show.'
            }
        default:
            return state
    }
}