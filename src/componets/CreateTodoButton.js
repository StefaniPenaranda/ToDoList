import React from 'react';
import '../styles/componets/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
     alert("aqui se abrira un modal")
  }
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
