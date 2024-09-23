import styles from './Todo.module.css';
function Todo({ todoText }) {
  return (
    <div
      onDoubleClick={(e) => {
        e.target.style.display = 'none';
      }}
      className={styles.todo}
    >
      <div className={styles.todo__info}>
        <img
          src="/assets/todo-icon.png"
          alt="todo icon"
          className={styles.todo__icon}
        />
        <p className={styles.todo__text}>{todoText}</p>
      </div>
    </div>
  );
}

export default Todo;
