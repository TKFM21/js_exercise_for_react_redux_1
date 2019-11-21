import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActionCreator';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({
            [field]: event.target.value
        });
    }

    handleClick() {
        const text = this.state.text.trim();
        this.setState({ text: '' });
        if (!text) {
            window.alert('Please input something...');
            return
        }
        this.props.addTodo(text);
    }

    render() {
        return (
            <div>
                <label>
                    <textarea
                        name="text"
                        value={ this.state.text }
                        onChange={ this.handleChange }
                    >
                    </textarea>
                </label>
                <br />
                <button onClick={ this.handleClick }>Add</button>
            </div>
        );
    }
}

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