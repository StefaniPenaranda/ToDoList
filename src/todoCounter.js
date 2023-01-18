import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, complete}) {

  return (
    <h2 className="TodoCounter">You have completed {complete} of {total } tasks</h2>
  );
}

export { TodoCounter };
