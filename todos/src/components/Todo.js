import React, { useState } from 'react';

const Todo = (props) => {

    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();
        setNewTodo(e.target.value);
    }

    const addToTodos = (e) => {
        const todoItem = {
            text: newTodo,
            complete: false
        }

        e.preventDefault();
        setTodos([...todos, todoItem]);
    }

    const deleteTodo = (delIndx) => {
        const removeTodo = todos.filter((item, i) => {
            return i !== delIndx;
        })

        setTodos(removeTodo);
    }

    const toggleCompletion = (indx) => {
        const updatedTodo = todos.map((todoItem, i) => {
        if (indx === i) {
            todoItem.complete = !todoItem.complete;
        }

        return todoItem;
        });

        setTodos(updatedTodo);
    }

    return (
        <>
            <form onSubmit={ addToTodos }>
                <div>
                    <input onChange = { addTodo } type="text"></input>
                </div>
                
                <div>
                    <button>Add</button>
                </div>
            </form>

            <div>
                {
                    todos.map( (item, i) => {
                        const todoClasses = [];

                        if (item.complete) {
                            todoClasses.push('line-through');
                        }

                        return (
                            <div key={i}>
                                <p className={todoClasses.join(" ")}>{ item.text }</p>
                                <input onChange= { (e) => {toggleCompletion(i);} } checked={newTodo.complete} type="checkbox"></input>
                                <button onClick= { () => {deleteTodo(i)} }>Delete</button>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </>
        
    )
}

export default Todo;