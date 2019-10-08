import React, { useState, useEffect } from 'react'
import '../../css/Base.css'
import './Fetch.css'

const Fetch = () => {
  const [url, setUrl] = useState('')
  const [requestsTotal, setRequestsTotal] = useState(1);
  const [requestsFulfilled, setRequestsFulfilled] = useState(0);
  useEffect(() => {
    const fetchData = async () =>
      await fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => response.json())
        .then(json => {
          setUrl(json.message)
          setRequestsFulfilled(requestsFulfilled+1)
        })
    fetchData()
  }, [requestsTotal])
  const loading = (<div className="Loading-Placeholder">
    <p>Loading...</p>
    </div>)
  const body = url ? <img src={url} alt="A dog" /> : loading
  return (
    <div className="Container">
    <h1>Fetching data</h1>
      {body}
      <button className="Button"
        onClick={() => {
          setUrl('')
          setRequestsTotal(requestsTotal+1)
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
