import React, { useState } from 'react'
import { interpolateColors } from '../../utils/colorinterpolator'
import './Password.css'

const RED = '252, 23, 3'
const YELLOW = '245, 224, 66'
const GREEN = '114, 245, 66'
const INPUT_WIDTH = 220
const TARGET_PASSWORD_LENGTH = 10

const PasswordInput = () => {
  let [passwordLength, setPasswordLength] = useState(0)

  return (
    <div className="Password">
      <h1>Password Strength</h1>
      <input
        className="Password-Input"
        type="password"
        placeholder="Password"
        onChange={({ target }) => {
          setPasswordLength(target.value.length)
        }}
      />
      <StrengthBar_
        width={INPUT_WIDTH}
        targetLength={TARGET_PASSWORD_LENGTH}
        currentLength={passwordLength}
      />
      <ul>
        <li>
          Password is at least {TARGET_PASSWORD_LENGTH.toString()} characters:{' '}
          {`${passwordLength >= 10 ? '✅' : '❌'}`}
        </li>
      </ul>
    </div>
  )
}

const StrengthBar_ = ({ width, targetLength, currentLength }) => {
  // Construct the discrete values of our password strength bar. It goes from red to yellow, then yellow to green.
  let stepValue = targetLength / 2
  const colorRange = interpolateColors(
    RED,
    YELLOW,
    /* steps= */ stepValue
  ).concat(interpolateColors(YELLOW, GREEN, /* steps= */ stepValue))
  const isValid = currentLength >= targetLength
  const currentIndex = isValid ? targetLength - 1 : currentLength
  const currentWidth = isValid
    ? width
    : Math.round(width * (currentLength / targetLength))

  return (
    <div
      style={{
        backgroundColor: `rgb(${colorRange[currentIndex]})`,
        height: '20px',
        width: `${currentWidth}px`,
        borderRadius: '4px',
      }}
    />
  )
}

export default PasswordInput
