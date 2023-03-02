import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'


function TodoForm(){
  const  {newTodoVAlue, SetNewTodoValue} = React.useState("");
  // consumimos el estado con useContext para evitar que el form se recargue solo 
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const onChange= (event)=>{
    SetNewTodoValue(event.target.value) 
  };

  //creamos un estado local 
  const onCancel = ()=>{
    setOpenModal(false);
    // tarea pendiente
  };
  const onSubmit= (event)=>{
    event.preventDefault();
    // tarea pendiente
    addTodo(newTodoVAlue);
    setOpenModal(false)
  };

 
  return (
    
    <form 
      onSubmit={onSubmit}
    >
      <label>
      Escribe tu nuevo todo
      </label>
      <textarea 
        value={newTodoVAlue} 
        onChange={onChange}  
        placeholder="Cortar cebolla"
      />
      <div className="TodoForm-buttonContainer">
        <button 
          type = 'button'
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button 
        // en ves que llamar tambien a onclick , lo que hacemos es llamar  a la propiedad submit del form
          type = 'submit'
          disabled={!newTodoVAlue}
          className="TodoForm-button TodoForm-button--add"
          //disabled={!newToDoValue}
          >
          Add ToDo
        </button>
      </div>
    </form>
  );
}

export {TodoForm};
