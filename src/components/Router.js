import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Counter from './counter/Counter'
import Fetch from './fetch/Fetch'
import Home from './home/Home'
import List from './list/List'
import PasswordInput from './password/PasswordInput'
import PropsAndState from './propsandstate/PropsAndState'

const routes = [
  ['/props-and-state/', 'Props and State', PropsAndState],
  ['/password/', 'Password', PasswordInput],
  ['/fetch-data/', 'Fetch data', Fetch],
  ['/list/', 'Simple List', List],
  ['/counter/', 'Counter', Counter],
]

const Router = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul className="Navigation">
          {routes.map(([path, display]) => (
            <li>
              <Link to={path}>{display}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Route path="/" exact={true} component={Home} />
      {routes.map(([path, display, component]) => (
        <Route path={path} exact={true} component={component} />
      ))}
    </div>
  </BrowserRouter>
)

export default Router
