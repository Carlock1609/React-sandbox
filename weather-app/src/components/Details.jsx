import React from 'react';

const Details = ({ main, name, wind, clouds, coord }) => {
    return (
        <div className="Details">
            <div className="detail-name">{name}</div>
            <div className="detail-temp"><span>{main.temp}</span></div>
            <div className="detail-weather">
                <div>
                    <label htmlFor="winds">WINDS</label>
                    <div id="winds" className="detail-winds">{wind}</div>
                </div>
                <div>
                    <label htmlFor="clouds">CLOUDS</label>
                    <div id="clouds" className="detail-clouds">{clouds}</div>
                </div>
            </div>
            <div className="detail-coords">Lat: {coord.lat} - Lng: {coord.lon}</div>
        </div>
    );
};

export default Details