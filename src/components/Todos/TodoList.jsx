import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodoAsCompleted }) {
  return (
    <div className={styles.todo__todolist}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => {
        return (
          <Todo
            deleteTodo={deleteTodo}
            toggleTodoAsCompleted={toggleTodoAsCompleted}
            key={index}
            index={index}
            todo={todo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
