import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [value, setValue] = useState('')
    
    const onHandleSubmit = (e) => {
        e.preventDefault()
        if(!value) return;
        addPost(value);
        setValue('');
    }

    return (
        <form onSubmit={onHandleSubmit} className="PostForm">
            <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder="Create a Post..." />
        </form>
    );
};

export default PostForm;