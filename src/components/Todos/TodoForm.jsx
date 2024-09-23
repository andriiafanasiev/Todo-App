import React, { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  let [todoText, setTodoText] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles.todoForm__container}>
      <input
        placeholder="Enter new todo"
        className={styles.todoInput}
        value={todoText}
        onChange={(e) => {
          setTodoText(e.currentTarget.value);
        }}
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
