import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    decrement() {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return <div>
            <h1>Our Value is : {this.state.count}</h1>
            <button onClick={() => this.increment()} >Add Value</button>
            <button onClick={() => this.decrement()} >Reduce Value</button>

        </div>;
    }
}

export default About;