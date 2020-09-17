import React, { useState } from 'react';

const TodoForm = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        // adds value back up to parent prop
        props.addTodo(value);
        // resets value
        setValue('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add Todo Item..." />
        </form>
    );
};

export default TodoForm;