import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className={styles.todo__todolist}>
            {todos.length === 0 && (
                <h2 style={{ opacity: '0.5', marginTop: '50px' }}>
                    Todo list is empty
                </h2>
            )}
            {todos.map((todo) => {
                return (
                    <TodoItem
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        key={todo.id}
                        todo={todo}
                    />
                );
            })}
        </div>
    );
}

export default TodoList;
