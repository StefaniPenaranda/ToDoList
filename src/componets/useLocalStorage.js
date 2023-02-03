import React from "react";

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
        setLoading(false);
      }
      catch(error){
        setError(error)
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

export { useLocalStorage};