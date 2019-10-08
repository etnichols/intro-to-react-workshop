import React, { Component } from 'react'

import Greeter from './Greeter'

import '../../css/Base.css'

const names = ['Bob', 'Sally', 'Nathan', 'Brittney']

class HelloWorld extends Component {
  render() {
    return (
      <div>
      <h1>Hello World (Simple Component)</h1>
        <Greeter name="Bob" />
        <Greeter name="Sally" />
      </div>
    )
  }
}

export default HelloWorld
