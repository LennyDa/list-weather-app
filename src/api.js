import axios from "axios";
import {ACTIONS} from "./assests/constants";

export const getData = (dispatch, latitude, longitude) => {
    return axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
        .then(response => {
            dispatch({ type: ACTIONS.FETCH_SUCCESS, payload : response.data})
        })
        .catch( error => {
            dispatch({ type: ACTIONS.FETCH_ERROR})
        })
};