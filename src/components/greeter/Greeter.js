import React, { Component } from 'react'

import '../Base.css'

class Greeter extends Component {
  render() {
    return React.createElement('h3', null, `Hello, ${this.props.name}`)
  }
}

class ExtendedGreeter extends Component {
  render() {
    return React.createElement(
      'div',
      /* props= */ null,
      React.createElement(Greeter, { name: 'Ben' }, null),
      React.createElement('p', /* props= */ null, 'Have a wonderful day!')
    )
  }
}

export default class GreeterExample extends Component {
  render() {
    return (
      <div className="Container">
      <h1>Greeter</h1>
        <Greeter name="Bob" />
        <Greeter name="Sally" />
        <Greeter name="Tim" />
      </div>
    )
  }
}
