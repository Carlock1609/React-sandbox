import React, { useState } from 'react';

import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Mow the Lawn',
      isCompleted: false,
  },
    {
      text: 'Take girl for dinner',
      isCompleted: false,
  },
    {
      text: 'Clean the room',
      isCompleted: false,
  },
  ]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted !== true) {
      newTodos[index].isCompleted = true;
    } else {
      newTodos[index].isCompleted = false;
    }
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-block">
        <div className="todo-form">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="todos">
          {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        todo={todo}
                        index={index}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
