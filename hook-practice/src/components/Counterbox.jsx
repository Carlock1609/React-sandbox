import React, { useState } from 'react';

import IntervalCounter from './IntervalCounter';
import ClickCounter from './ClickCounter';
import CounterButton from './CounterButton';
import Auth from './Auth';

const Counterbox = () => {
    // const [counter, setCounter] = useState(0);
    // const [clickCounter, setClickCounter] = useState(0)

    // setInterval(() => {
    //     setCounter(counter + 1)
    // }, 3000)
    

    return (
        <div className="Counterbox">
            {/* <div>
                <IntervalCounter counter={counter} />
            </div>
            <div>
                <ClickCounter clickCounter={clickCounter} setClickCounter={setClickCounter} />
            </div> */}
            {/* <div>
               <CounterButton />
            </div> */}
            <Auth />
        </div>
    )
};

export default Counterbox;