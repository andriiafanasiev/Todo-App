import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import capitalizeFirstLetter from './utils';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodosActions from './components/Todos/TodosActions';
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

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodoscCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1 style={{ marginTop: '10%' }}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {todos.length !== 0 && (
        <TodosActions
          completedTodosExist={completedTodoscCount > 0}
          resetTodos={resetTodosHandler}
          clearCompletedTodos={clearCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {todos.some((todo) => todo.isCompleted) && (
        <p style={{ marginTop: '5%' }}>
          You have completed {todos.filter((todo) => todo.isCompleted).length}{' '}
          todos
        </p>
      )}
    </div>
  );
}

export default App;
