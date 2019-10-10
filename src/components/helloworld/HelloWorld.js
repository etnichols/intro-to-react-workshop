import React, { Component } from 'react'
import Greeter from './Greeter'

class HelloWorld extends Component {
  render() {
    return (
      <div>
      <h1>Hello World (Simple Component)</h1>
        <Greeter name="Bob" />
        <Greeter name="Sally" />
        <Greeter name="Tim" />
      </div>
    )
  }
}

export default HelloWorld
