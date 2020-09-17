import React from 'react';

// This is getting treated like a component
const Todo = ({todo, index, completeTodo, removeTodo}) => {


    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
        <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
        </div>
    );
};


  export default Todo;