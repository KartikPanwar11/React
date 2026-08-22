import CBC from './CBC'
import {Component} from 'react'

class Parent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Parent Component Mounted');
  }


  render() {
    return (
      <div>
        <h1>Parent</h1>
        <CBC name={"Fiery"} location={"India"}/>
        <CBC name={"Kartik"} location={"India"}/>
        <CBC name={"Piyush"} location={"India"}/>
      </div>
    )
  }
}

export default Parent

// Parent constructor will called
// Parent render method will called

// Child constructors will called firs FIERY one
// Child render method will called for FIERY one
 
// Child constructors will called for KARTIK one
// Child render method will called for KARTIK one

// Child constructors will called for PIYUSH one
// Child render method will called for PIYUSH one

// Child componentDidMount method will called for FIERY one
// Child componentDidMount method will called for KARTIK one
// Child componentDidMount method will called for PIYUSH one 
// parent componentDidMount method will called