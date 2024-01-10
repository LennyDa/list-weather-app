import React, {useState, useEffect} from 'react';
import './WeatherWidget.scss';
import WeatherDetails from "./WeatherDetails";



const WeatherWidget = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

    }, []);


    return (
        <div>
            {latitude && latitude && <WeatherDetails latitude={latitude} longitude={longitude}/>}
        </div>

    );
}

export default WeatherWidget;