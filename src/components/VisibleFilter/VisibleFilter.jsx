import React from 'react';
import { connect } from 'react-redux';
import {
    showAll,
    showActive,
    showCompleted
} from '../../actions/visibleFilterActionCreator';

const VisibleFilter = (props) => {
    return (
        <div>
            <button onClick={ props.showAll }>ALL</button>
            <button onClick={ props.showActive }>ACTIVE</button>
            <button onClick={ props.showCompleted }>COMPLETED</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        showAll: () => {
            const showAllAction = showAll();
            dispatch(showAllAction);
        },
        showActive: () => {
            const showActiveAction = showActive();
            dispatch(showActiveAction);
        },
        showCompleted: () => {
            const showCompletedAction = showCompleted();
            dispatch(showCompletedAction);
        }
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(VisibleFilter);