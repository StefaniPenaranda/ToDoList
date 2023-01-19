import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos); 
  // creandonnuestro estado
  const [searchValue, setSearchValue] = React.useState('');
  //contamos cuantos todos tenemos completados y cuantontenemos entotoal
  const completedTodos = todos.filter(todo => todo.completed == true).length

  const totalTodos = todos.length;
  
  //crear un array vacio que recibira todos las busquedas
  let searchTodos = [];

  if (!searchValue.length >= 1){
    searchTodos = todos;
  } else { 
    searchTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      console.log(todoText)
      const searchText = searchValue.toLowerCase();
      console.log(searchText) 
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoSearch 
      // imprimiendo en consola el imput
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />
      <TodoCounter 
        total = {totalTodos}
        completed = {completedTodos}
      />
      

      <TodoList>
        {searchTodos.map(todo => (
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
