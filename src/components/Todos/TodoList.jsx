import React from 'react';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <div>
      {todos
        ? todos.map((todoText) => {
            return <Todo todoText={todoText}></Todo>;
          })
        : 'Todo list is empty'}
    </div>
  );
}

export default TodoList;
