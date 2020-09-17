import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {

    return (
        <div className="Todo">
            <div className="todo-text" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>{todo.text}</div>
            <div className="todo-btns">
                <button onClick={() => completeTodo(index)} className="complete-btn btn">{todo.isCompleted !== true ? 'Complete' : 'Uncomplete'}</button>
                <button onClick={() => removeTodo(index)} className="remove-btn btn">X</button>
            </div>
        </div>
    );
};

export default Todo;