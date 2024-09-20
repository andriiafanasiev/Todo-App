import styles from './Todo.module.css';
function Todo({ todoText }) {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__text}>{todoText}</div>
    </div>
  );
}

export default Todo;
