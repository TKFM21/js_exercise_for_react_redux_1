import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED,
    addTodo,
    deleteTodo,
    toggleTodoCompleted
} from '../../actions/todoActionCreator';

describe('action/todoActionCreator TEST', () => {
    describe('addTodo', () => {
        it('引数にstringを渡すとtextキーとなってreturn', () => {
            const dummy = 'dummy';
            const addAction = addTodo(dummy);
            expect( addAction ).toStrictEqual({
                type: ADD_TODO,
                text: dummy
            });
        });
    });
    describe('deleteTodo', () => {
        it('引数にnumberを渡すとindexキーとなってreturn', () => {
            const dummyIndex = 1;
            const deleteAction = deleteTodo(dummyIndex);
            expect( deleteAction ).toStrictEqual({
                type: DELETE_TODO,
                index: dummyIndex
            });
        });
    });
    describe('toggleTodoCompleted', () => {
        it('引数にnumberを渡すとindexキーとなってreturn', () => {
            const dummyIndex = 2;
            const toggleTodoCompletedAction = toggleTodoCompleted(dummyIndex);
            expect( toggleTodoCompletedAction ).toStrictEqual({
                type: TOGGLE_TODO_COMPLETED,
                index: dummyIndex
            });
        });
    });
});