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
//Hook para reemplazr el React.usatate
//itemName = nombre del elemeto con el que trabjaremos, el elemeto que recogeremos y salvaremos dentro del  localStorage
function useLocalStorage(itemName, initialValue){
  //llamamos a un react Hoock oficial,
  const [error, setError ] = React.useState(false)
  const [loading, setLoading ] = React.useState(true) 
  const [item, setItem] = React.useState(initialValue); 

  React.useEffect(()=>{
    // Simulamos un segundo de delay de carga
    setTimeout(()=>{
      try {
        // llamando al localStorage traer el elemento que nos envian como argumneto en la funcion useLocalStorage()
        const localStorageItem = localStorage.getItem(itemName);         
        let parsedItem;// para los usuarios nuevos que nunca han tenido una tarea
        
        if (!localStorageItem) {
          // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si existen TODOs en el localStorage los regresamos como nuestros todos
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      }
      catch(error){
        setError(error)
      }finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
   
    },1000)
})

  

  //funciona para 
  const saveItem = (newItem)=>{
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try{
      const stringConvertItem = JSON.stringify(newItem);//convirtiendo los Item a string
      localStorage.setItem(itemName,stringConvertItem);
      // llamamos localStorage(donde queremos guardar la info, enviamos el strign con la nueva actualizacion de todos
      // )
      setItem(newItem);
    } catch(error){
      setError(error)
    }

  };
  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}


function App() {
  // nos devolvera los item el elemento que hayamos guardado en localStorage;
  const {item: todos, saveItem: saveTodos, loading , error} = useLocalStorage('TODOS_V1', []);

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

export default App;
