import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form/Form';

function App() {
    return (
        <div className="App">
            <h1>Todo App</h1>
            <Form />
            <TodoList />
        </div>
    );
}

export default App;
