import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActionCreator';

const Form = (props) => {
    const [text, setText] = useState('');

    const onClickHandler = () => {
        const trimText = text.trim();
        setText('');
        if (!trimText) {
            window.alert('Please input something...');
            return
        }
        props.addTodo(trimText);
    };

    return (
        <div>
            <label>
                <textarea
                    name="text"
                    value={ text }
                    onChange={ (event) => setText(event.target.value) }
                >
                </textarea>
            </label>
            <br />
            <button onClick={ onClickHandler }>
                Add
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            const addAction = addTodo(text);
            dispatch(addAction);
        }
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(Form);