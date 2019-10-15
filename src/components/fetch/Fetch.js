import React, { useState, useEffect, createRef } from 'react'
import '../Base.css'
import './Fetch.css'

/** Fetch random pictures of dogs. */
const Fetch = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [requestsFulfilled, setRequestsFulfilled] = useState(0)
  const [requestsTotal, setRequestsTotal] = useState(1)
  const [url, setUrl] = useState('')

  useEffect(
    () => {
      const fetchPicture = () =>
        fetch(`https://dog.ceo/api/breeds/image/random`)
          .then(response => response.json())
          .then(json => void setUrl(json.message))
      fetchPicture()
    },
    [requestsTotal]
  )

  return (
    <div className="Fetch-Container">
      <h1>Fetching data with Hooks</h1>
      <img
        alt={'A random dog'}
        className={`Image ${isLoading ? 'Hidden' : ''}`}
        onLoad={() => {
          setIsLoading(false)
          setRequestsFulfilled(requestsFulfilled + 1)
        }}
        src={url}
      />
      <button
        className="Button"
        onClick={() => {
          setRequestsTotal(requestsTotal + 1)
          setIsLoading(true)
        }}
      >
        Fetch new picture
      </button>
      <p>Requests made: {requestsTotal}</p>
      <p>Requests fulfilled: {requestsFulfilled}</p>
    </div>
  )
}

export default Fetch
