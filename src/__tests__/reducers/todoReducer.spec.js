import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED,
    addTodo,
    deleteTodo,
    toggleTodoCompleted
} from '../../actions/todoActionCreator';
import todoReducer from '../../reducers/todoReducer';
import Todo from '../../models/Todo';

const createTodos = () => {
    return [1, 2, 3].map( number => {
        return new Todo('dummy' + number);
    });
};

describe('reducers/todoReducer TEST', () => {
    describe('case ADD_TODO', () => {
        it('addTodoで作成したactionを渡すと配列に1要素追加されてreturn', () => {
            const initialState = createTodos();
            const dummy = 'dummy';
            const addTodoAction = addTodo(dummy);
            const currentState = todoReducer(initialState, addTodoAction);
            expect( Array.isArray(currentState) ).toStrictEqual(true);
            expect( currentState.length ).toStrictEqual( initialState.length + 1 );

            const todo = currentState.pop();
            expect( todo instanceof Todo ).toStrictEqual(true);
            expect( todo.text ).toStrictEqual(dummy);
        });
    });
    describe('case DELETE_TODO', () => {
        it('deleteTodoで作成したactionを渡すと配列の指定要素が削除されてreturn', () => {
            const initialState = createTodos();
            const index = 1;
            const deleteTodoAction = deleteTodo(index);
            const currentState = todoReducer(initialState, deleteTodoAction);
            expect( Array.isArray(currentState) ).toStrictEqual(true);
            expect( currentState.length ).toStrictEqual( initialState.length - 1 );
            expect( currentState ).not.toStrictEqual( initialState );
            
        });
    });
});