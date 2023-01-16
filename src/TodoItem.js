import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (

    <div className="cardItem">

      <div className="card-img">
        <img className="imgBox"src='https://plazavea.vteximg.com.br/arquivos/ids/561765-450-450/20192547.jpg?v=637427443242800000'alt="imgCard"/>
      </div>

      <div className="card-info">
        <p className="text-title"> {props.text} </p>
        <p className="text-title"> $/Precio </p>
      </div>

    </div>,

    {/* <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li> */}
  );
}

export { TodoItem };