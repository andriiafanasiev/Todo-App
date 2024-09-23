import styles from './Todo.module.css';
function Todo({ todoText }) {
  return (
    <div className={styles.todo}>
      <div className={styles.todo__info}>
        <img src="/assets/" alt="todo icon" className={styles.todo__icon} />
        <p className={styles.todo__text}>{todoText}</p>
      </div>
    </div>
  );
}

export default Todo;
