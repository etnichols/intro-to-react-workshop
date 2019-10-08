import React, { useState } from 'react'
import {interpolateColors} from '../../utils/colorinterpolator'
import './Password.css'

const RED = '252, 23, 3'
const YELLOW = '245, 224, 66'
const GREEN = '114, 245, 66'
const INPUT_WIDTH = 220
const TARGET_PASSWORD_LENGTH = 10

const StrengthBar = ({ width, targetLength, currentLength }) => {
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
        backgroundColor: `rgb(${colorRange[currentIndex]})`,
        height: '20px',
        width: `${currentWidth}px`,
        borderRadius: '4px'
      }}
    />
  )
}

const PasswordInput = () => {
  let [passwordLength, setPasswordLength] = useState(0)

  return (
    <div className="Password">
    <h1>Password Strength Indicator</h1>
      <input
        className="Password-Input"
        type="password"
        placeholder="Password"
        onChange={({target}) => {
          setPasswordLength(target.value.length)
        }}
      />
      <StrengthBar
        width={INPUT_WIDTH}
        targetLength={TARGET_PASSWORD_LENGTH}
        currentLength={passwordLength}
      />
      <ul>
        <li>Password must be at least 10 characters</li>
      </ul>
    </div>
  )
}

export default PasswordInput
