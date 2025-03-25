import TodoItem from './TodoItem';
import styles from './TodoList.module.css';
import { Todo } from '../../types';

interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
}

function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
    return (
        <div className={styles.todo__todolist}>
            {todos.length === 0 && (
                <h2 style={{ opacity: '0.5', marginTop: '50px' }}>
                    Todo list is empty
                </h2>
            )}
            {todos.map((todo) => {
                return (
                    <TodoItem
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        key={todo.id}
                        todo={todo}
                    />
                );
            })}
        </div>
    );
}

export default TodoList;
