import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

const RED = '245, 66, 66'
const YELLOW = '245, 224, 66'
const GREEN = '114, 245, 66'
const INPUT_WIDTH = 400
const TARGET_PASSWORD_LENGTH = 10

// Returns a single rgb color interpolation between given rgb color
// based on the factor given; via https://codepen.io/njmcode/pen/axoyD?editors=0010
const interpolateColor = (color1, color2, factor = 0.5) => {
  var result = color1.slice()
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]))
  }
  return result
}
// Returns an array of interpolated color values between the two supplied
// colors.
const interpolateColors = (color1, color2, steps) => {
  const stepFactor = 1 / (steps - 1)
  let interpolatedColorArray = []

  color1 = color1.match(/\d+/g).map(Number)
  color2 = color2.match(/\d+/g).map(Number)

  for (var i = 0; i < steps; i++) {
    interpolatedColorArray.push(
      interpolateColor(color1, color2, stepFactor * i)
    )
  }
  return interpolatedColorArray
}

const PasswordStrength = ({ width, targetLength, currentLength }) => {
  let stepValue = targetLength / 2;
  const colorRange = interpolateColors(RED, YELLOW, /* steps= */ stepValue).concat(interpolateColors(YELLOW, GREEN, /* steps= */ stepValue))
  const isValidLength = currentLength > targetLength
  const currentIndex = isValidLength ? targetLength - 1  : currentLength
  const currentWidth =
    isValidLength
      ? width
      : Math.round(width * (currentLength / targetLength))

  return (
    <div
      style={{
        width: `${currentWidth}px`,
        height: '20px',
        backgroundColor: `rgb(${colorRange[currentIndex]})`,
      }}
    />
  )
}

const PasswordInput = () => {
  let [count, setCount] = useState(0)
  let [passwordLength, setPasswordLength] = useState(0)

  return (
    <div className="Password">
      <input
        className="Password-Input"
        type="password"
        placeholder="Password"
        onChange={e => {
          setPasswordLength(e.target.value.length)
        }}
      />
      <PasswordStrength
        width={INPUT_WIDTH}
        targetLength={TARGET_PASSWORD_LENGTH}
        currentLength={passwordLength}
      />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <PasswordInput />
    </div>
  )
}

export default App
