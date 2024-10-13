import React, { useState } from 'react';
import capitalizeFirstLetter from './utils';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    todoText = capitalizeFirstLetter(todoText);
    if (
      todoText !== '' &&
      (!todos.length || todoText !== todos[todos.length - 1].text)
    ) {
      setTodos([...todos, { text: todoText, completed: false }]);
    }
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, id) => id !== index));
  };

  const toggleTodoAsCompleted = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
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
        toggleTodoAsCompleted={toggleTodoAsCompleted}
      />
    </div>
  );
}

export default App;
