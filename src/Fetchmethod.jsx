import React, { useEffect, useState } from 'react'

const Fetchmethod = () => {
    const [todos,settodos]=useState([]);
    useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users/2")
        .then((response)=>response.json())
        .then ((data) => settodos(data))
        .catch((error)=>console.error("error fecthing data:",error))
        console.log(todos)
    },[]);
  return (
    <div>
        <h1>Todos List</h1>
        <ul>
          <li key={todos.id}>
            <h3>userid:{todos.userid}</h3>
            <h3>id:{todos.id}</h3>
            <h3>name:{todos.name}</h3>
            <h3>username:{todos.username}</h3>
            <h3>email:{todos.email}</h3>
            <h3>phone:{todos.phone}</h3>
            <h3>website:{todos.website}</h3>

          </li>
          
        </ul>
      
    </div>
  );
};

export default Fetchmethod;
