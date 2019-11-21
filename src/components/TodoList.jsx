import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActionCreator';

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
            <button onClick={() => {
                props.addTodo('aaa' + props.todos.length);
            }}>
                追加
            </button>
            {todoItems}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            const addAction = addTodo(text);
            dispatch(addAction);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);