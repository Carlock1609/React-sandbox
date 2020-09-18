import React, { useState } from 'react';

import MovieCard from './MovieCard';

const dummyData = [
    {
        image: '',
        text: 'movie'
    },
    {
        image: '',
        text: 'movie'
    },
    {
        image: '',
        text: 'movie'
    },
    {
        image: '',
        text: 'movie'
    },
];

const MovieList = ({ dummyTitle }) => {


    const displayRows = dummyData.map((movie, index) => (
        <MovieCard
            key={index}
            movie={movie}
        />
    ))


    return (
        <div className="MovieList">
                <span className="movie-row-title">{dummyTitle}</span>
                {displayRows}
                {displayRows}
                {displayRows}
                {displayRows}
                {displayRows}
                <button className={`movie-right-arrow`}>{'>'}</button>
        </div>
    );
};

export default MovieList;