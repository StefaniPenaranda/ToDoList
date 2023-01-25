import React from 'react';
import { TodoCounter } from '../componets/TodoCounter';
import { TodoSearch } from '../componets/TodoSearch';
import { TodoList } from '../componets/TodoList';
import { TodoItem } from '../componets/TodoItem';
import { CreateTodoButton } from '../componets/CreateTodoButton';
import '../styles/pages/App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;// para los usuarios nuevos que nunca han tenido una tarea
  if (!localStorageTodos) {
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos); 
  // creandonnuestro estado
  const [searchValue, setSearchValue] = React.useState('');
  //contamos cuantos todos tenemos completados y cuantontenemos entotoal
  const completedTodos = todos.filter(todo => todo.completed === true).length

  const totalTodos = todos.length;
  
  //crear un array vacio que recibira todos las busquedas
  let searchTodos = [];

  if (!searchValue.length >= 1){
    searchTodos = todos;
  } else { 
    // searchTodos = todos.filter( todo => {
    //   const todoText = todo.text.toLowerCase();
    //   console.log(todoText)
    //   const searchText = searchValue.toLowerCase();
    //   console.log(searchText) 
    //   return todoText.includes(searchText);
    // })
    searchTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  }
//funciona para 
const safeTodos = (newTodos)=>{
    const stringConvertTodos = JSON.stringify(setTodos);//convirtiendo los todos a string
    localStorage.setItem('TODO_V1',stringConvertTodos);
     // llamamos localStorage(donde queremos guardar la info, enviamos el strign con la nueva actualizacion de todos
     // )
     setTodos(newTodos);
  };


  // funcion para marcra comocompletados 
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    todos[todoIndex].completed = true;
    setTodos(newTodos)
    }

    const DeletTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      //splice nos permite sacra una parte ( donde empezamos,cuantos sacamos)
      newTodos.splice(todoIndex,1);
      setTodos(newTodos)
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
            onComplete={()=> completeTodo(todo.text)}
            onDelete={()=>DeletTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
