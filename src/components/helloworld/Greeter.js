import React, { Component } from 'react'

export default class Greeter extends Component {
  render() {
    return React.createElement('h3', null, `Hello, ${this.props.name}`)
  }
}

class ExtendedGreeter extends Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Greeter, { name: 'Ben' }, null),
      React.createElement('p', null, 'Have a wonderful day!')
    )
  }
}

// export { Greeter, ExtendedGreeter }
