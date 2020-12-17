import React from 'react';
import ToDo from './ToDo';
import Form from './Form'





function Todolist({todos, setTodos, select, setselect}){
    
    return(
    <div className="todo container">
        <ul className="to-do list">
            {todos
            .map((data, i) => (
                    <ToDo obj={data} key={i}/>


            ))}
            
        </ul>
        

    </div>);
};



export default Todolist;