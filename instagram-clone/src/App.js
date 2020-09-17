import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/Navigation.css';
import './styles/Feed.css';

import {
    Navigation
} from './components'

import Feed from './components/feed/Feed';

const App = () => {

    return (
        <div className="App">
            <Navigation />
            <Feed />
        </div>
    )
};

export default App;