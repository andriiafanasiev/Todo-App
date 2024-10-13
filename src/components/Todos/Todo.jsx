import React from 'react';
import { RiTodoFill } from 'react-icons/ri';
import { MdOutlineDelete } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, index, deleteTodo, toggleTodoAsCompleted }) {
  return (
    <div
      className={
        todo.completed
          ? `${styles.todo} ${styles['todo-completed']}`
          : styles.todo
      }
    >
      <div className={styles.todo__info}>
        <RiTodoFill className={styles.todo__icon} />
        <p className={styles.todo__text}>{todo.text}</p>{' '}
      </div>
      <div className={styles.todo__controls}>
        <button onClick={() => deleteTodo(index)}>
          <MdOutlineDelete className={styles.todo__icon} />
        </button>
        <button onClick={() => toggleTodoAsCompleted(index)}>
          <FaCheck className={styles.todo__icon} />
        </button>
      </div>
    </div>
  );
}

export default Todo;
