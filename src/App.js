import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import capitalizeFirstLetter from './utils';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    todoText = capitalizeFirstLetter(todoText);
    const newTodo = {
      text: todoText,
      isCompleted: false,
      id: uuidv4(),
    };
    if (
      todoText !== '' &&
      (!todos.length || todoText !== todos[todos.length - 1].text)
    ) {
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  return (
    <div className="App">
      <h1 style={{ marginTop: '10%' }}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
