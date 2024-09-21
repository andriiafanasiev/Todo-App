import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos }) {
  return (
    <div className={styles.todo__todolist}>
      {todos
        ? todos.map((todoText) => {
            return <Todo todoText={todoText}></Todo>;
          })
        : 'Todo list is empty'}
    </div>
  );
}

export default TodoList;
