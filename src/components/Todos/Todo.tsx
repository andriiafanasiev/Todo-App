import { RiTodoFill } from 'react-icons/ri';
import { MdOutlineDelete } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

interface TodoObj {
    text: string;
    isCompleted: boolean;
    id: string;
}

interface TodoProps {
    todo: TodoObj;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
}

function Todo({ todo, deleteTodo, toggleTodo }: TodoProps) {
    return (
        <div
            className={`${styles.todo} ${
                todo.isCompleted && styles.competedTodo
            }`}
        >
            <div className={styles.todo__info}>
                <RiTodoFill className={styles.todo__icon} />
                <p className={styles.todo__text}>{todo.text}</p>{' '}
            </div>
            <div className={styles.todo__controls}>
                <button onClick={() => deleteTodo(todo.id)}>
                    <MdOutlineDelete className={styles.todo__deleteIcon} />
                </button>
                <button onClick={() => toggleTodo(todo.id)}>
                    <FaCheck className={styles.todo__checkIcon} />
                </button>
            </div>
        </div>
    );
}

export default Todo;
