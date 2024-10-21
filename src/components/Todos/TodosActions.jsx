import Button from '../UI/Button';
import styles from './TodosActions.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';
function TodosActions({
  resetTodos,
  clearCompletedTodos,
  completedTodosExist,
}) {
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
