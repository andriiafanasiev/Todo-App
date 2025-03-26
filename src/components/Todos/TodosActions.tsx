import Button from '../UI/Button';
import styles from './TodosActions.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';

interface TodosActionsProps {
    resetTodos: () => void;
    clearCompletedTodos: () => void;
    completedTodosExist: boolean;
}

function TodosActions({
    resetTodos,
    clearCompletedTodos,
    completedTodosExist,
}: TodosActionsProps) {
    return (
        <div className={styles.todosActions__container}>
            <Button
                onClick={() => {
                    resetTodos();
                }}
                title={'Reset Todos'}
            >
                <GrPowerReset />
            </Button>

            <Button
                disabled={!completedTodosExist}
                onClick={() => {
                    clearCompletedTodos();
                }}
                title={'Clear completed todos'}
            >
                <MdDeleteForever />
            </Button>
        </div>
    );
}

export default TodosActions;
