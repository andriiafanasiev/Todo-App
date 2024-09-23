import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todo__todolist}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todoText, index) => {
        return (
          <Todo
            deleteTodo={deleteTodo}
            key={index}
            index={index}
            todoText={todoText}
          ></Todo>
        );
      })}
    </div>
  );
}

export default TodoList;
