import React, { Component } from 'react'

import { MyContext } from '../context/Context'

class Button extends Component {
  onClick() {
    console.log('You pressed the button.')
  }

  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <button
            style={{ background: this.props.color }}
            onClick={this.onClick}
          >
            Click Me, context value {value}
          </button>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Button
