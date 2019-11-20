class Todo {
    constructor(text) {
        this._text = text;
        this._completed = false;
    }

    get text() {
        return this._text;
    }

    hasCompleted() {
        return this._completed;
    }

    toggleCompleted() {
        this._completed = !this._completed;
    }
}

export default Todo;