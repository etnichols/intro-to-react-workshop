import React, { useState, useEffect, createRef } from 'react'
import '../../css/Base.css'
import './Fetch.css'

/** Fetch random pictures of dogs. */
const Fetch = () => {
  const [url, setUrl] = useState('')
  const [requestsFulfilled, setRequestsFulfilled] = useState(0)
  const [requestsTotal, setRequestsTotal] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  let imgRef = React.createRef()

  useEffect(() => {
    const fetchPicture = () => fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(json => {
      imgRef.current.src = json.message
      imgRef.current.onload = () => {
        setIsLoading(false)
        setRequestsFulfilled(requestsFulfilled + 1)
      }
    })
    fetchPicture()
  }, [requestsTotal])

  return (
    <div className="Container">
      <h1>Fetching data with Hooks</h1>
      <img
        className={`Image ${isLoading ? 'Hidden' : ''}`}
        ref={imgRef}
        src={url}
      />
      <button
        className="Button"
        onClick={() => {
          setUrl('')
          setRequestsTotal(requestsTotal + 1)
          setIsLoading(true)
        }}
      >
        Refresh picture
      </button>
      <p>Requests made: {requestsTotal}</p>
      <p>Requests fulfilled: {requestsFulfilled}</p>
    </div>
  )
}

export default Fetch
