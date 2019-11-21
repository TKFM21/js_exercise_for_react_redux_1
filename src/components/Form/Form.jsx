import React from 'react';

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
        this.props.onClickHandler(text);
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

export default Form;