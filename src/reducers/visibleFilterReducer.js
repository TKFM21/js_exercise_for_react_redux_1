import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../actions/visibleFilterActionCreator';

const visibleFilterReducer = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SHOW_ALL:
            return SHOW_ALL;
        case SHOW_ACTIVE:
            return SHOW_ACTIVE;
        case SHOW_COMPLETED:
            return SHOW_COMPLETED;
        default:
            return state;
    }
};

export default visibleFilterReducer;