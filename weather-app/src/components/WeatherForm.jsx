import React, { useState } from 'react';

const WeatherForm = ({ searchCity }) => {
    const [search, setSearch] = useState('');
    console.log(search)

    const onHandeSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        searchCity(search);
        setSearch('');
    };


    return (
        <form onSubmit={onHandeSubmit} className="WeatherForm">
            <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="Search for a City..." />
            <button type="submit" value="Submit">Go!</button>
        </form>
    );
};

export default WeatherForm;