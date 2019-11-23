import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodoCompleted } from '../actions/todoActionCreator';
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../actions/visibleFilterActionCreator';
import Button from './Button/Button';
import './TodoList.css';

const TodoList = (props) => {
    const todoItems = props.todos.map( (todo, index) => {
        return (
            <div key={index} className="todo-item">
                <span>{todo.text}</span>
                <Button onClickHandler={ () => props.toggleTodoCompleted(index) }>
                    { todo.hasCompleted() ? '完了' : '未完了' }
                </Button>
                <Button onClickHandler={ () => props.deleteTodo(index) }>
                    Del
                </Button>
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