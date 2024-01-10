import {faBolt, faCloud, faCloudShowersHeavy, faCloudSun, faSnowflake, faSun} from "@fortawesome/free-solid-svg-icons";


export const ACTIONS = {
    ADD_ROW: 'add-row',
    TOGGLE_ROW: 'toggle-row',
    DELETE_ROW: 'delete-row',
    STATUS_ROW: 'status-row',
    FETCH_SUCCESS: 'fetch-success',
    FETCH_ERROR: 'fetch-error'
}

export const WEATHER_DATA = [
    {icon: faCloud, celsius:'10', fahrenheit: '50'},
    {icon: faBolt, celsius:'5', fahrenheit: '41'},
    {icon: faSnowflake, celsius:'-2', fahrenheit: '28'},
    {icon: faSun, celsius:'17', fahrenheit: '63'},
    {icon: faCloudShowersHeavy, celsius:'12', fahrenheit: '53'},
    {icon: faCloudSun, celsius:'2', fahrenheit: '36'}
]