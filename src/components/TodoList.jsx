import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoCompleted } from '../actions/todoActionCreator';

const TodoList = (props) => {
    const todoItems = props.todos.map( (todo, index) => {
        return (
            <div key={index}>
                <span>{todo.text}</span>
                <button onClick={ () => props.toggleTodoCompleted(index) }>
                    { todo.hasCompleted() ? '完了' : '未完了' }
                </button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodoCompleted: (index) => {
            const toggleAction = toggleTodoCompleted(index);
            dispatch(toggleAction);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);