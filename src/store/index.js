import { createStore, combineReducers } from 'redux';
import todoReducer from '../reducers/todoReducer';
import visibleFilterReducer from '../reducers/visibleFilterReducer';

const reducers = combineReducers({
    todos: todoReducer,
    visibleFilter: visibleFilterReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;