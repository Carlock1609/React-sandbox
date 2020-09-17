import React from 'react';

const ClickCounter = (props) => {

    return (
        <div className="ClickCounter">
            <button onClick={() => props.setClickCounter(props.clickCounter + 1)}>Click me!</button>
            <div>{props.clickCounter}</div>
        </div>
    )
};

export default ClickCounter;