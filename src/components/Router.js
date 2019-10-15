import React, { useEffect } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import Counter from './counter/Counter'
import Fetch from './fetch/Fetch'
import Home from './home/Home'
import List from './list/List'
import PasswordInput from './password/PasswordInput'
import Greeter from './greeter/Greeter'

import './Router.css'

const routes = [
  ['/greeter/', 'Greeter', Greeter],
  ['/counter/', 'Counter', Counter],
  ['/list/', 'Simple List', List],
  ['/password/', 'Password', PasswordInput],
  ['/fetch-data/', 'Fetch data', Fetch],
]

const Router = () => {
  return (
    <BrowserRouter>
      <div className="Nav-Container">
        <ul className="Navigation">
          <li>
            <NavLink exact activeClassName="Active-Route" to="/">
              Home
            </NavLink>
          </li>
          {routes.map(([path, display]) => (
            <li>
              <NavLink activeClassName="Active-Route" to={path}>
                {display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Route path="/" exact component={Home} />
      {routes.map(([path, display, component]) => (
        <Route path={path} component={component} />
      ))}
    </BrowserRouter>
  )
}

export default Router
