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
    });
});