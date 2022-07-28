import React from "react";

const Form =({inputText, setinputText, todos, setTodos, setStatus}) =>{
    const inputHandler = (e)=>{
        console.log(e.target.value);
        setinputText(e.target.value);
    }
    const submitTodoHandler =(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText, completed:false, id:Math.random()*1000}
        ]);
        setinputText("")     
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return(
        <form>
            <input value={inputText} onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} className="filter-todo" name="todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;