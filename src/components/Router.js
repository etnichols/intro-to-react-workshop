import React, { useEffect } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import {Counter} from './counter/Counter'
import Fetch from './fetch/Fetch'
import Greeter from './greeter/Greeter'
import Home from './home/Home'
import List from './list/List'
import PasswordInput from './password/PasswordInput'
import Timer from './timer/Timer'

import './Router.css'

const routes = [
  ['/greeter/', 'Greeter', Greeter],
  ['/list/', 'List', List],
  ['/counter/', 'Counter', Counter],
  ['/timer/','Timer', Timer],
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
