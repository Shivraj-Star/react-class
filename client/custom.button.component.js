import React from 'react';

export default class CustomButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.initialCount }
        // this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        // this.setState({ count: count + 1 })
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <button className="btn btn-info" onClick={this.incrementCount.bind(this)}>Incremennt value {this.state.count}</button>
                <br/>
                <button className="btn btn-warning">Props value {this.props.initialCount}</button>

            </div>
        )
    }
}