import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

interface TodoFormProps {
    addTodo: (todoText: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
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
            <Button type="submit" title={'Submit'}>
                Submit
            </Button>
        </form>
    );
}

export default TodoForm;
