import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../componets/todoContext';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];

//Hook para reemplazr el React.usatate
//itemName = nombre del elemeto con el que trabjaremos, el elemeto que recogeremos y salvaremos dentro del  localStorage



function App() {
 
return (
  <TodoProvider>
    <AppUI />
  </TodoProvider>
);
}

export default App;
