import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import PasswordInput from './PasswordInput'

function App() {
  return (
    <div className="App">
      <h1>CUNY React Workshop 2019</h1>
      <Router>
        <div>
          <nav>
            <ul className="Navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/password/">Password Strength</Link>
              </li>
            </ul>
          </nav>
          <Route path="/password/" component={PasswordInput} />
        </div>
      </Router>
    </div>
  )
}

export default App
