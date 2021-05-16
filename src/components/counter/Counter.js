import React, { Component, useState } from 'react'

import '../Base.css'
import './Counter.css'

const Wrapper = ({title, children}) => (
  <div className="Container">
    <h1 className="Example-Title">{title}</h1>
    {children}
  </div>
)

class CounterWithClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
        <div className="Counter">
        <button
          onClick={() => { this.setState({ count: this.state.count - 1 }) }}
        >
          Decrement
        </button>
        <p className="Clicks">Counter: {this.state.count}</p>
        <button
          onClick={() => { this.setState({ count: this.state.count + 1 })
        }}
        >
          Increment
        </button>
        <br/>
        <button onClick={() => { this.setState({count: 0}) }}>
          Reset
        </button>
        </div>
    )
  }
}

const CounterWithHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <p className="Clicks">Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br/>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

const Counter = () => (
  <>
    <Wrapper title="Counter: Class-based component">
      <CounterWithClass />
    </Wrapper>
    <Wrapper title="Counter: hook-based component">
      <CounterWithHooks />
    </Wrapper>
  </>
)

export {Counter}
