import React, { useState } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const dummyData = [
    { text: 'Mow the lawn',
        isCompleted: false },
    { text: 'Clean the dishes',
        isCompleted: false },
    { text: 'Make dinner time',
        isCompleted: false }
];

const App = () => {
    const [todos, setTodos] = useState(dummyData);
    
    // naming does matter here, it MUST be 'text'. rather than sending Todo
    const addTodo = (text) => {
        const newTodo = [...todos, { text }];
        setTodos(newTodo);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        if(!newTodos[index].isCompleted) {
            newTodos[index].isCompleted = true;
        } else {
            newTodos[index].isCompleted = false;
        }
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos)
    }

    const displayTodos = todos.map((todo, index) => (
            <Todo
                key={index}
                todo={todo}
                index={index}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
    ));

    return (
        <div className="App">
            <div className="max-length">
                {
                    todos.length < 9 ? todos.length : 'MAX'
                }
            </div>
            <TodoForm
             addTodo={addTodo}
             maxTodos={todos.length}
            />
            <div className="TodoList">
                {displayTodos}
            </div>
        </div>
    );
};

export default App;