import React from 'react';

const Comment = ({ text, user }) => {
    
    return (
        <div className="Comment">
            <div><strong>{user}</strong>: <span>{text}</span></div>
        </div>
    );
};

export default Comment;