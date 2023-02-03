import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

// para compartir info entre provider y consumer
function TodoProvider(props){
   // nos devolvera los item el elemento que hayamos guardado en localStorage;
   const {item: todos, saveItem: saveTodos, loading , error} = useLocalStorage('TODOS_V1', []);

   // creandonnuestro estado
   const [searchValue, setSearchValue] = React.useState('');
   //contamos cuantos todos tenemos completados y cuantontenemos entotoal
   const completedTodos = todos.filter(todo => !!todo.completed === true).length;
 
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
     searchTodos = todos.filter(todo => {
       const todoText = todo.text.toLowerCase();
       const searchText = searchValue.toLowerCase();
       return todoText.includes(searchText);
     });
   }
 
   // funcion para marcra comocompletados 
   const completeTodo = (text) => {
     const todoIndex = todos.findIndex(todo => todo.text === text);
     const newTodos = [...todos];
     newTodos[todoIndex].completed = true;
     saveTodos(newTodos)
     }
 
     const DeletTodo = (text) => {
       const todoIndex = todos.findIndex(todo => todo.text === text);
       const newTodos = [...todos];
       //splice nos permite sacra una parte ( donde empezamos,cuantos sacamos)
       newTodos.splice(todoIndex,1);
       saveTodos(newTodos)
       }
 //  console.log('antes')
 //   React.useEffect(()=>{
 //     console.log('dentro de use')
 //   }, [totalTodos])
 // console.log('despues')
 
  return(
    //utilizaremos para envolver toda nuestra aplicacion en nuestroo componente app.js
    //envolvera toda nuestra aplicacion, tendra por dentro a todos los componentes dentro de los componentes quesea
    // donde llamemos a nuestro consumidor del contexto
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      completeTodo,
      DeletTodo
    }}>

      {props.children}
    </TodoContext.Provider>
  )
}


// todas partrs, siempre que necesitemos informacion de el estado compartido
<TodoContext.Consumer></TodoContext.Consumer>

export{TodoContext, TodoProvider}