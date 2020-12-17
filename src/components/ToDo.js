import React, { useEffect} from 'react';
import './ToDo.css'
import Todolist from './Todolist'
//import axios from 'axios';


const ToDo = ({text, obj, todos, setTodos, select, setselect}) => {
    


    /*const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !==todo.id));
        
        

    };*/
    /*const check = (select) => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{

                ...item, completed: !item.completed, select: 11
                 
                };
            }
            return item;
        })
        );
    };*/
   
    const updateHandler = () => {
        
        

    };


    return(
        
    <div className='todo'>

    <input type="checkbox" />

    <li >
    
            {obj.tasks}
                
    </li>
           
    <button  className="trash-btn"><i className="fas fa-trash"></i></button>
    <input type="text" name="name" id="update" required/>
    <button id='btnupdate'>Update</button>
            
    </div>
        
        
    );
}

export default ToDo;