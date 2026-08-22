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
      </div>
    )
  }
}

export default Parent