import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    const todoItems = props.todos.map( (todo, index) => {
        return (
            <div key={index}>
                <p>{todo.text}</p>
            </div>
        );
    });
    return (
        <div>
            {todoItems}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { todos: state.todos };
};

export default connect(
    mapStateToProps
)(TodoList);