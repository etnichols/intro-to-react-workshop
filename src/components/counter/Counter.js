import React, { Component } from 'react'

import '../Base.css'
import './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div className="Container">
        <h1 className="Example-Title">Counter</h1>
        <div className="Counter">
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              })
            }}
          >
            Decrement
          </button>
          <p className="Clicks">Counter: {this.state.count}</p>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              })
            }}
          >
            Increment
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
