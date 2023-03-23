import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.count || 0};
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(event) {
        let count = this.state.count;
        this.setState({ count: count + 1});
    }

    onDecrement(event) {
        let count = this.state.count;
        this.setState({ count: count -1})
    }

    render() {
        let myCount = this.state.count;

        return (
            <div className="container">
                <h1>Count: <span className="badge bg-secondary">{myCount}</span></h1>

            <div>
                <button onClick={this.onIncrement}> +1 </button>
                <button onClick={this.onDecrement}> -1 </button>
            </div>

            </div>
        )
    }
}