import React, { useState } from 'react';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todoList, setTodoList] = useState([]); 

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodoList([...todoList, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const removeTodo = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="New Todo"
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </div>
    );
};

export default TodoList;
