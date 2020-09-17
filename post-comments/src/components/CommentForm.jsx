import React, { useState } from 'react';

const CommentForm = ({ addComment, index }) => {
    console.log(index)
    const [value, setValue] = useState('');

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addComment(value, index);
        setValue('');
    }

    return (
        <form onSubmit={onHandleSubmit} className="CommentForm">
            <input onChange={(e)=> setValue(e.target.value)} value={value} type="text" placeholder="Leave a Comment here..." />
        </form>
    );
};

export default CommentForm;