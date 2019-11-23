import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
    showAll,
    showActive,
    showCompleted
} from '../../actions/visibleFilterActionCreator';
import visibleFilterReducer from '../../reducers/visibleFilterReducer';

describe('reducers/visibleFilterReducer TEST', () => {
    describe('case SHOW_ALL', () => {
        it('return SHOW_ALL', () => {
            const showAllAction = showAll();
            const initialState = undefined;
            const currentState = visibleFilterReducer(initialState, showAllAction);
            expect( currentState ).toStrictEqual(SHOW_ALL);
        });
        it('初期値はreturn SHOW_ALL', () => {
            const action = {};
            const initialState = undefined;
            const currentState = visibleFilterReducer(initialState, action);
            expect( currentState ).toStrictEqual(SHOW_ALL);
        });
    });
    describe('case SHOW_ACTIVE', () => {
        it('return SHOW_ACTIVE', () => {
            const showActiveAction = showActive();
            const initialState = undefined;
            const currentState = visibleFilterReducer(initialState, showActiveAction);
            expect( currentState ).toStrictEqual(SHOW_ACTIVE);
        });
    });
    describe('case SHOW_COMPLETED', () => {
        it('return SHOW_COMPLETED', () => {
            const showCompletedAction = showCompleted();
            const initialState = undefined;
            const currentState = visibleFilterReducer(initialState, showCompletedAction);
            expect( currentState ).toStrictEqual(SHOW_COMPLETED);
        });
    });
});