import React, {useState, useEffect} from 'react';
import './ToDo.css'
import Todolist from './Todolist'
import axios from 'axios';


const ToDo = ({text, obj, todos, setTodos, select, setselect}) => {
    
    const [newtask, setnewtask] = useState();

    const updateTextHandler = (e) => {
        console.log(e.target.value);
        setnewtask(e.target.value);

    };

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
   
    const updateHandler = (id) => {
        axios.put('http://localhost:5000/taskRoutes/update', {
            id: id,
            newtask: newtask,
        })
        

    };


    return(
        
    <div className='todo'>

    <input type="checkbox" />

    <li >
    
            {obj.tasks}
                
    </li>
           
    <button  className="trash-btn"><i className="fas fa-trash"></i></button>
    <input type="text" name="name" id="update" onChange={updateTextHandler} required/>
    <button id='btnupdate' onClick={()=> updateHandler(obj._id)}>Update</button>
            
    </div>
        
        
    );
}

export default ToDo;