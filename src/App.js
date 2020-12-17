import React, {useState,  useEffect} from 'react'
import './App.css';
import Form from "./components/Form"
import Todolist from "./components/Todolist"
import axios from 'axios';



function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [select, setselect] = useState ("");
  const [display, setDisplay] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/taskRoutes/read').then((response)=>{
        console.log(response);
        setTodos(response.data);
    })
}, []

)


  return (
    <div className="App">
      
  
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      select={select}
      setselect={setselect}/>
      
      
      
    </div>
  );
}

export default App;