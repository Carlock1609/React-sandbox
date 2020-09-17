import React from 'react';

const Todo = (props) => {

    return (
        <div className="Todo">
            <div style={{ textDecoration: props.todo.isCompleted ? 'line-through' : '' }}>{props.todo.text}</div>
            <div>
                <button onClick={() => props.completeTodo(props.index)}>{props.todo.isCompleted !== true ? 'Complete' : 'Uncomplete'}</button>
                <button onClick={() => props.removeTodo(props.index)}>Remove</button>
            </div>
        </div>
    );
};

export default Todo