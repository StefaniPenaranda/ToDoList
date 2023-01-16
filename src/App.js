// import './App.css';
import React from 'react';
import {TodoCounter} from './todoCounter';
import {TodoItem} from './TodoItem';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoList} from './TodoList';

const todos =[
  {text:'Cortar cebolla', completed: false},
  {text:'Cortar ajos', completed: false},
  {text:'Cortar manteca', completed: false}
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList> 
        {todos.map( todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
         completed={todo.completed}
          />
        ))}
      </TodoList> 
      <CreateTodoButton></CreateTodoButton>
    </React.Fragment>
  );
}

export default App;
