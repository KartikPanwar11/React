import React from 'react';

class CBC extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };


    }



    render() {
        const{ name, location } = this.props;
        const {count} = this.state;


        return (
            <div>
                <h1>Class Based Component</h1>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <h2>Count: {count}</h2>
                <button onClick={() => this.setState({count: count + 1})}>Increment</button>
                <button onClick={() => this.setState({count: count - 1})}>Decrement</button>
            </div>
        );
    }
}

export default CBC;