import Todo from '../../models/Todo';

describe('models/Todo TEST', () => {
    describe('constructor', () => {
        it('Instanceは_text, _completedプロパティを持っている', () => {
            const dummy = 'dummy';
            const newTodo = new Todo(dummy);
            expect( newTodo instanceof Todo ).toStrictEqual(true);
            expect( newTodo._text ).toStrictEqual(dummy);
            expect( newTodo._completed ).toStrictEqual(false);
        });
    });
    describe('getter text', () => {
        it('instance.textで_textプロパティがreturn', () => {
            const dummy = 'dummy';
            const newTodo = new Todo(dummy);
            expect( newTodo.text ).toStrictEqual(dummy);
        });
    });
    describe('hasCompleted', () => {
        it('_completed()で初期値falseがreturn', () => {
            const dummy = 'dummy';
            const newTodo = new Todo(dummy);
            expect( newTodo.hasCompleted() ).toStrictEqual(false);
            newTodo._completed = true;
            expect( newTodo.hasCompleted() ).toStrictEqual(true);
        });
    });
    describe('toggleCompleted', () => {
        it('_completedプロパティが反転される', () => {
            const dummy = 'dummy';
            const newTodo = new Todo(dummy);
            expect( newTodo._completed ).toStrictEqual(false);
            newTodo.toggleCompleted();
            expect( newTodo._completed ).toStrictEqual(true);
        });
    });
});