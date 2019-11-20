import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED
} from '../actions/todoActionCreator';
import Todo from '../models/Todo';

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const todo = new Todo(action.text);
            return [
                ...state,
                todo
            ];
        case DELETE_TODO:
            return state.filter( (todo, index) => {
                return index !== action.index;
            });
        case TOGGLE_TODO_COMPLETED:
            state[action.index].toggleCompleted();
            return state;
    
        default:
            return state;
    }
};

export default todoReducer;