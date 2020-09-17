import React, { useState, useEffect } from 'react';

const CounterButton = () => {
    const [count, setCount] = useState(0);

    const onHandleCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `You clicked ${count} times!`
    })

    return (
        <div>
            {/* This sets it to a function that is only ran once clicked */}
            <button onClick={() => onHandleCount()}>
            {/* This runs it every time becaus you are invoking hte funciton over and over */}
            {/* <button onClick={onHandleCount()}> */}
                {count}
            </button>
        </div>
    );
};

export default CounterButton;