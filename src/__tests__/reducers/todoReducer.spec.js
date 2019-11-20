import {
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
        it('存在しない要素が指定された場合そのままの配列がreturn', () => {
            const initialState = createTodos();
            const index = 10;
            const deleteTodoAction = deleteTodo(index);
            const currentState = todoReducer(initialState, deleteTodoAction);
            expect( Array.isArray(currentState) ).toStrictEqual(true);
            expect( currentState.length ).toStrictEqual( initialState.length );
            expect( currentState[index] ).toStrictEqual( initialState[index] );
            expect( currentState ).toStrictEqual( initialState );
        });
    });
    describe('case TOGGLE_TODO_COMPLETED', () => {
        it('toggleTodoCompletedのactionを渡すと配列の指定要素の_completedが反転してreturn', () => {
            const initialState = createTodos();
            const index = 1;
            const toggleTodoCompletedAction = toggleTodoCompleted(index);
            const currentState = todoReducer(initialState, toggleTodoCompletedAction);
            expect( Array.isArray(currentState) ).toStrictEqual(true);
            expect( currentState.length ).toStrictEqual( initialState.length );
            expect( currentState[index] ).not.toStrictEqual( initialState[index] );
            expect( currentState ).not.toStrictEqual( initialState );
            expect( currentState[index].hasCompleted() ).toStrictEqual(true);
        });
        it('存在しない要素が指定された場合そのままの配列がreturn', () => {
            const initialState = createTodos();
            const index = 10;
            const toggleTodoCompletedAction = toggleTodoCompleted(index);
            const currentState = todoReducer(initialState, toggleTodoCompletedAction);
            expect( Array.isArray(currentState) ).toStrictEqual(true);
            expect( currentState.length ).toStrictEqual( initialState.length );
            expect( currentState[index] ).toStrictEqual(undefined);
            expect( currentState ).toStrictEqual( initialState );
        });
    });
    describe('case default', () => {
        it('stateがそのままreturn', () => {
            const initialState = createTodos();
            const dummy = 'dummy';
            const action = { type: dummy };
            const currentState = todoReducer(initialState, action);
            expect( Array.isArray(currentState) ).toStrictEqual(true);
            expect( currentState.length ).toStrictEqual( initialState.length );
            expect( currentState ).toStrictEqual( initialState );
        });
    });
});