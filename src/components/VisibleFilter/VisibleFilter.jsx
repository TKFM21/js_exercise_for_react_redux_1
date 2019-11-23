import React from 'react';
import { connect } from 'react-redux';
import {
    showAll,
    showActive,
    showCompleted
} from '../../actions/visibleFilterActionCreator';
import Button from '../Button/Button';

const VisibleFilter = (props) => {
    return (
        <div>
            <Button onClickHandler={ props.showAll }>ALL</Button>
            <Button onClickHandler={ props.showActive }>ACTIVE</Button>
            <Button onClickHandler={ props.showCompleted }>COMP</Button>
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