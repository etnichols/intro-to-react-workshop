import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Fetch from './fetch/Fetch'
import Home from './home/Home'
import PasswordInput from './password/PasswordInput'
import PropsAndState from './propsandstate/PropsAndState'

const Router = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul className="Navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/props-and-state/">Props and State</Link>
          </li>
          <li>
            <Link to="/password/">Password Strength</Link>
          </li>
          <li>
            <Link to="/fetch-data/">Fetching Data</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact={true} component={Home} />
            <Route path="/props-and-state/"  component={PropsAndState} />
      <Route path="/password/" component={PasswordInput} />
      <Route path="/fetch-data/" component={Fetch} />
    </div>
  </BrowserRouter>
)

export default Router
