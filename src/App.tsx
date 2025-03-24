import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import capitalizeFirstLetter from './utils';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodosActions from './components/Todos/TodosActions';
import { Todo } from '../src/types';
import './App.css';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string): void => {
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

    const deleteTodoHandler = (id: string): void => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodoHandler = (id: string): void => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

    const resetTodosHandler = (): void => {
        setTodos([]);
    };

    const clearCompletedTodosHandler = (): void => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodoscCount: number = todos.filter(
        (todo) => todo.isCompleted
    ).length;

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
            {completedTodoscCount > 0 && (
                <p
                    style={{ marginTop: '5%' }}
                >{`You have completed ${completedTodoscCount} ${
                    completedTodoscCount === 1 ? 'todo' : 'todos'
                }`}</p>
            )}
        </div>
    );
}

export default App;
