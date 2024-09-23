import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import capitalizeFirstLetter from './utils.js';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    todoText = capitalizeFirstLetter(todoText);
    if (todoText !== '' && todoText !== todos[todos.length - 1]) {
      setTodos([...todos, todoText]);
    }
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, id) => id !== index));
  };

  return (
    <div className="App">
      <h1 style={{ marginTop: '10%' }}>Todo App</h1>
      <TodoForm todos={todos} addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
