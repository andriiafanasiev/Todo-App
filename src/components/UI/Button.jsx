import styles from './Button.module.css';
function Button({ onClick, children, title, disabled = false, ...props }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
