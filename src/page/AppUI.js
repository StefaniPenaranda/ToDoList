import React from 'react';
import { TodoContext } from '../componets/todoContext';
import { TodoCounter } from '../componets/TodoCounter';
import { TodoSearch } from '../componets/TodoSearch';
import { TodoList } from '../componets/TodoList';
import { TodoItem } from '../componets/TodoItem';
import { CreateTodoButton } from '../componets/CreateTodoButton';

function AppUI() {
  const {loading, 
    error, 
    searchTodos, 
    completeTodo,
    DeletTodo} = React.useContext(TodoContext);
    
  return (
    <React.Fragment>
      <TodoSearch/>
      <TodoCounter/>

        <TodoList>
          {loading && <p>We are loading</p>}
          {error && <p>ahhh mistake, run</p>}
          {(!loading && !searchTodos.length) && <p> Create your first Todo</p>}
          {searchTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodo(todo.text)}
              onDelete={()=>DeletTodo(todo.text)}
            />
          ))}
        </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}


export { AppUI };