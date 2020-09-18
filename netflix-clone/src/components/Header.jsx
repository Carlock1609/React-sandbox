import React from 'react';

import Button from './Button';
import Navigation from './Navigation';

const Header = () => {

    return (
        <div className="Header">
            <Navigation />
            <img className="header-title" src="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQ5XRsL8a6oihBhzVVvhP1l4PD_LlUjjjkaolWLewL4Eyrxid1btoU1rwsuMEm0UAmsGeiH39gCy37CBsp0IlTaqVlWB6J-4JlXfUjPZKd8YcJ7P7AjDvR3FQnxO8PvpdXfCRjeNBbqdVMMzpO41CWg2lxKS7xo6luO5OVUvo64DUw.webp?r=cf3" title="The Devil All The Time" alt="Some pic" />
            <div className="header-movie-info">
                <div className="header-ranking"><span className="header-top-ten"><span>TOP</span><span>10</span></span><span className="description">#4 In The U.S. Today</span></div>
                <div className="header-description">Sinister characters converge around a young man devoted to protecting those he loves in a postwar backwoods town teeming with corruption and brutality.</div>
            </div>
            <div className="header-button-group">
                <Button text={'Play'} theme={'btn-light'} />
                <Button text={"Movie Info"} theme={'btn-dark'} />
            </div>
        </div>
    );
};

export default Header;