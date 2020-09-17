import React, { useState } from 'react';

const TodoForm = ({ addTodo, maxTodos }) => {
    const [value, setValue] = useState('');
    // 'e' comes with handleSubmit without passing it?
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit} style={{opacity: maxTodos < 9 ? 1 : .5}}>
            <div htmlFor="todo-input">Add Todo:</div>
            <input className="todo-input" onChange={(e) => setValue(e.target.value)} value={value} id="todo-input" type="text" placeholder="Mow the lawn..." />
            <button className="todo-input-btn btn" type="submit" value="Submit">Go!</button>
        </form>
    );
};

export default TodoForm;