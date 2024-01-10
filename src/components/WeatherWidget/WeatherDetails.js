import React, {useEffect, useMemo, useReducer, useState} from 'react';
import axios from 'axios';
import {ACTIONS, WEATHER_DATA} from '../../assests/constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getRandomPosition} from '../../utils';
import {initialState, weatherInfoReducer} from '../../reducers/weatherInfoReducer';
import NoDetails from './NoDetails';
import Loader from '../Loader';
import {getData} from "../../api";

const WeatherDetails = ({latitude, longitude}) => {
    const [temperatureType, setTemperatureType] = useState('celsius');
    const iconPosition = useMemo(() => getRandomPosition, [latitude, longitude]);
    const [state, dispatch] = useReducer(weatherInfoReducer, initialState);

    useEffect(() => {
        getData(dispatch, latitude, longitude)
    }, [latitude, longitude])

    if (!state?.payload) return <NoDetails error={state.error}/>;

    const showTempByType = (e) => {
        setTemperatureType(e.target.name)
    }

    return (
        <div className="weather-info-container">
            {!state?.payload?.address ? <Loader/> : <>
                <div className="temperature-container">
                    <div className="temperature-container__temperature-by-type">
                        <span
                            className={temperatureType === 'celsius' ? 'show' : 'hide'}>{WEATHER_DATA[iconPosition].celsius}</span>
                        <span
                            className={temperatureType === 'fahrenheit' ? 'show' : 'hide'}>{WEATHER_DATA[iconPosition].fahrenheit}</span>
                    </div>
                    <div className="temperature-container__temperature-buttons">
                        <button onClick={showTempByType}
                                name="celsius" className={`celsius${temperatureType === 'celsius' ? ' selected' : ''}`}>°C
                        </button>
                        | <button onClick={showTempByType}
                                  name="fahrenheit" className={`fahrenheit${temperatureType === 'fahrenheit' ? ' selected' : ''}`}>°F</button>
                    </div>
                    <div className="temperature-container__icon"><FontAwesomeIcon
                        icon={WEATHER_DATA[iconPosition].icon}/>
                    </div>
                </div>
                <div className="location">{state?.payload?.address?.town}, {state?.payload?.address?.country}</div>
            </>}

        </div>
    );
}

export default WeatherDetails;