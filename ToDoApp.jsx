import React, { useState } from 'react';

function TodoApp()
{
    const [todos,setTodos]=useState([]);
    const [input,setInput]=useState('');

    const addTodo=()=> {
        if(input.trim()) {
            setTodos([...todos, { id: Date.now(), text:input,completed: false}]);
            setInput('');
        }
    };

    const deleteTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id !==id));
    };

    const toggleTodo=(id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed } : todo));
     
    };

    const handleKeyPress=(e)=>{
        if(e.key=='Enter'){
            addTodo();
        }
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input 
                    type="text"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a new task..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {todos.map(todo=>(
                    <li key={todo.id}>
                        <span 
                            onClick={()=>toggleTodo(todo.id)}
                            style={{textDecoration:todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;