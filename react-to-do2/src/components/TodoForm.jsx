import React, { useState } from 'react';

const TodoForm = (props) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return
        props.addTodo(value)
        setValue('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="too-item">Add Todo: </label>
            <input id="todo-item" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Todo here..." />
            <button value="Submit" type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;