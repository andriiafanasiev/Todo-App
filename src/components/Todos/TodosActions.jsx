import Button from '../UI/Button';
import { MdDeleteForever } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';
function TodosActions({ resetTodos, clearCompletedTodos }) {
  return (
    <>
      <Button
        onClick={() => {
          resetTodos();
        }}
        title={'Reset Todos'}
      >
        <GrPowerReset />
      </Button>
      <Button
        onClick={() => {
          clearCompletedTodos();
        }}
        title={'Clear completed todos'}
      >
        <MdDeleteForever />
      </Button>
    </>
  );
}

export default TodosActions;
