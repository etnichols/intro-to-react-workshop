import React, { Component } from 'react'

import '../../css/Base.css'
import './Counter.css'
import ColorContext from '../context/Context'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  inc() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  dec() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <ColorContext.Consumer>
          {value => (
            <div className="Example">
              <button
                style={{ background: value }}
                onClick={this.dec.bind(this)}
              >
                Decrement
              </button>
              <p className="Clicks">Counter: {this.state.count}</p>
              <button
                style={{ background: value }}
                onClick={this.inc.bind(this)}
              >
                Increment
              </button>
            </div>
          )}
        </ColorContext.Consumer>
      </div>
    )
  }
}

export default Counter
