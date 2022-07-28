import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form"
import Todolist from './components/Todolist';

function App() {
  const [inputText,setinputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    filterHandler();
  },[todos,status])

  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=> todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }
  return (
    <div className="App">
      <header>
        <h1>Momin's Todo List</h1>
      </header>
      <Form inputText={inputText} setinputText={setinputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
