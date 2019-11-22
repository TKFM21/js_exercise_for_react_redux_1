import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodoCompleted } from '../actions/todoActionCreator';
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../actions/visibleFilterActionCreator';

const TodoList = (props) => {
    const todoItems = props.todos.map( (todo, index) => {
        return (
            <div key={index}>
                <span>{todo.text}</span>
                <button onClick={ () => props.toggleTodoCompleted(index) }>
                    { todo.hasCompleted() ? '完了' : '未完了' }
                </button>
                <button onClick={ () => props.deleteTodo(index) }>
                    Del
                </button>
            </div>
        );
    });
    return (
        <div>
            { todoItems }
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleFilteredTodos = state.todos.filter( todo => {
        switch (state.visibleFilter) {
            case SHOW_ALL:
                return true;
            case SHOW_ACTIVE:
                return !todo.hasCompleted();
            case SHOW_COMPLETED:
                return todo.hasCompleted();
            default:
                return false;
        }
    });

    return {
        todos: visibleFilteredTodos,
        visibleFilter: state.visibleFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (index) => {
            const deleteAction = deleteTodo(index);
            dispatch(deleteAction);
        },
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