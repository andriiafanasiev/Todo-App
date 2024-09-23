import React, { useState } from 'react';
import styles from './TodoForm.module.css';
function TodoForm({ setTodos, todos }) {
  let [todoText, setTodoText] = useState('');

  return (
    <form className={styles.todoForm__container}>
      <input
        className={styles.todoInput}
        value={todoText}
        onChange={(e) => {
          setTodoText(e.currentTarget.value);
        }}
        type="text"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (todoText !== '') {
            setTodos([...todos, todoText]);
          }
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
