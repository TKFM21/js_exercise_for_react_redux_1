import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodoCompleted } from '../actions/todoActionCreator';
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../actions/visibleFilterActionCreator';

const TodoList = (props) => {
    const visibleFilteredTodoItems = props.todos.filter( todo => {
        switch (props.visibleFilter) {
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
    const todoItems = visibleFilteredTodoItems.map( (todo, index) => {
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
    return {
        todos: state.todos,
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