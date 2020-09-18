import React from 'react';

import Header from './components/Header';
import MovieList from './components/MovieList';

const dummyTitles = [
    'Continue Watching for Kylie',
    'Popular on Netflix',
    'Trending Now',
    'Saturn Award Nominees',
    'Because you watched New Girl',
];

const App = () => {

    return (
        <div className="App">
            <Header />
            <MovieList dummyTitle={dummyTitles[0]} />
            <MovieList dummyTitle={dummyTitles[1]} />
            <MovieList dummyTitle={dummyTitles[2]} />
            <MovieList dummyTitle={dummyTitles[3]} />
            <MovieList dummyTitle={dummyTitles[4]} />
        </div>
    );
};

export default App;