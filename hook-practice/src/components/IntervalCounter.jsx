import React from 'react';

const IntervalCounter = (props) => {
    return (
        <div className="Counter">
            <div className="counter-div">{props.counter}</div>
        </div>
    )
}

export default IntervalCounter;