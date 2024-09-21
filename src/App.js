import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1 style={{ marginTop: '10%' }}>Todo App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
