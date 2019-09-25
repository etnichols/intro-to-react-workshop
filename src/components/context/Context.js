import React, { createContext } from 'react'

// Testing out context.
const MyContext = createContext('#ff0000')

const ContextExample = () => (
  <MyContext.Consumer>
    {value => (
      <button
        style={{ backgroundColor: `${value}` }}
        onClick={() => {
          console.log('You pressed the button.')
        }}
      >
        Context value: {value}
      </button>
    )}
  </MyContext.Consumer>
)

export {
  MyContext,
  ContextExample
}
