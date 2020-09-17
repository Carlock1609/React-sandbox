import React from 'react';

const Button = ({ text, theme }) => {
    let playBtn = <i class="fas fa-play"></i>
    let infoBtn = <i class="fas fa-info-circle"></i>

    const displayBtn = text === 'Play' ? <span>{playBtn} {text}</span> : <span>{infoBtn} {text}</span>

    return (
        <button  className={`Button ${ theme }`}>
            {displayBtn}
        </button>
    );
};

export default Button