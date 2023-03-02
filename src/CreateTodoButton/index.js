import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    // alert(msg);
    // si le ponemos la una funcion en ña que convierte lo que recibe en su negativo 
    props.setOpenModal(prevState => !prevState)
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}


export { CreateTodoButton };
