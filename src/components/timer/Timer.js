import React, { useState, useEffect } from 'react'

import '../Base.css'

const Timer = () => {
  const [date, setDate] = useState(new Date())
  const tick = () => {
    setDate(new Date())
  }
  let timerId = setInterval(() => tick(), 1000)

  useEffect(() => {
    console.log('cleaning up')
    return () => {
      clearInterval(timerId)
    }
  },[])

  return (
    <div className="Container">
      <h1>Timer</h1>
      <p>Current time: {date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Timer
