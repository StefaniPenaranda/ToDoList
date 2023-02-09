import React from 'react';
import '../styles/componets/todoCounter.css';
import { TodoContext } from './todoContext';

function TodoCounter() {

  const { totalTodos, completedTodos} = React.useContext(TodoContext)

  return (
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos } tasks</h2>
  );
}

export { TodoCounter };
