import React from 'react';

class CBC extends React.Component {

    constructor(props) {
        super(props);
        console.log('Child Constructor Called');

        this.state = {
            userInfo:{
                name: 'Dummy Name',
                location: 'Default Location'
            }
        };

    }

    async componentDidMount() {
        console.log('Child Component Mounted');
        const data = await fetch('https://api.github.com/users/kartikpanwar11');
        const jsonData = await data.json();
        console.log(jsonData);

        this.setState({
            userInfo: jsonData
        });
    }



    render() {
        // const{ name, location } = this.props;
        const{ name, location } = this.state.userInfo;

        return (
            <div>
                <h1>Class Based Component</h1>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
            </div>
        );
    }
}

export default CBC;