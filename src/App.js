import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [todo, setTodos] = React.useState(todos); 
  // creandonnuestro estado
  const [searchValue, setSearchValue] = React.useState('');
  //contamos cuantos todos tenemos completados y cuantontenemos entotoal
  const completeTodo = todo.filter(todo => todo.completed === true).length
  const totalTodos = todo.length;
  return (
    <React.Fragment>
      <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />
      <TodoCounter 
        total = {totalTodos}
        complete = {completeTodo}
      />
      

      <TodoList>
        {todo.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
