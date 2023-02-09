import React from 'react';
import '../styles/componets/TodoSearch.css';
import { TodoContext } from './todoContext';

function TodoSearch() {
  
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input 
      className="TodoSearch" 
      placeholder="Search..."
      value={searchValue}
      onChange={onSearchValueChange}
      //{()=>setSearchValue('pollo')} 
    />,
    // <p>{searchValue}</p>
  ];
}

export { TodoSearch };
