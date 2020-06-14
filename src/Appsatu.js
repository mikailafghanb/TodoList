import React, { useState } from 'react';


function Todo({ todo, index, completeTodo, removeTodo, undo }) {
    return (
        <div className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {todo.text}
            <div>
                {todo.isCompleted ? (<button type="button" class="btn btn-warning" onClick={() => undo(index)}>Undo</button>
                )
                    : (<button type="button" onClick={() => completeTodo(index)}>Complete</button>)}

                {/* {todo.isCompleted ? (<input type="checkbox" onClick={() => undo(index)} checked></input>)
                    : (<input type="checkbox" onClick={() => completeTodo(index)}></input>)} */}

                <button type="button" onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                placeholder="add new task"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function Appsatu() {
    const [todos, setTodos] = useState([
        {
            text: "Learn about React",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    // const addTodo = (text, index) => {
    //     const newTodos = [...todos, { text }];
    //     newTodos.splice(index, 1);
    //     setTodos(newTodos);
    // };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const undo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = false;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const removeAll = () => {
        const newTodos = [];
        setTodos(newTodos);
    };

    return (
        <div>
            <div className="todo-list">
                <strong>Todo List</strong>
                <TodoForm addTodo={addTodo} />

                <button onClick={removeAll}>Delete All</button>

                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        undo={undo}
                    />
                ))}
            </div>
        </div>
    );
}

export default Appsatu;