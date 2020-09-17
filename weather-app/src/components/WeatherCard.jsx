import React, { useEffect, useState } from 'react';

import WeatherForm from './WeatherForm';

import OpenWeather from '../utils/OpenWeather';
import Details from './Details';

const WeatherCard = ({ dummyWeather }) => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState(null);
    console.log(city)

    const searchCity = (city) => {
        setCity(city)
    }

    useEffect(() => {
        if(!city) return;
        const fetchData = async () => {
            const setData = await OpenWeather(city)
            setResults(setData)
            console.log(setData)
        }
        fetchData()
    }, [city])
    
    return (
        <div className="WeatherCard">
            <WeatherForm searchCity={searchCity} />
            <div>
                {!results ? 
                <h1 className="detail-loading">Search for a City</h1> 
                : 
                <Details
                    main={results.main}
                    name={results.name}
                    wind={results.wind.speed}
                    clouds={results.clouds.all}
                    coord={results.coord}
                />
                }
            </div>
        </div>
    );
};

export default WeatherCard;