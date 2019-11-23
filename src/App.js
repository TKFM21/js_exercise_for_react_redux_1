import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form/Form';
import VisibleFilter from './components/VisibleFilter/VisibleFilter';

function App() {
    return (
        <div className="App">
            <h1>Todo App</h1>
            <Form />
            <hr/>
            <VisibleFilter />
            <TodoList />
        </div>
    );
}

export default App;
