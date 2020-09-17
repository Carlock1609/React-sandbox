import React, { useState } from 'react';


import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn about React',
      isCompleted: false
    },
    { text: 'Meet friend for lunch',
      isCompleted: false
    },
    { text: 'Build really cool todo app',
      isCompleted: false
    },
  ]);

  const addTodo = (text) => {
    // spread operator copies the list and adds the new todo
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  const completeTodo = (index) => {
    // copy state assign to var
    const newTodos = [...todos];
    // using the aruement to find the exact todo and marking as true
    newTodos[index].isCompleted = true;
    // setting the the state to new todos
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {/* Mapping over state to display Todo as a component/variable */}
        <div className="card-content">
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
