import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Counter from './counter/Counter'
import Fetch from './fetch/Fetch'
import Home from './home/Home'
import List from './list/List'
import PasswordInput from './password/PasswordInput'
import HelloWorld from './helloworld/HelloWorld'

const routes = [
  ['/', 'Home', Home],
  ['/hello-world/', 'Hello World', HelloWorld],
  ['/counter/', 'Counter', Counter],
  ['/list/', 'Simple List', List],
  ['/password/', 'Password', PasswordInput],
  ['/fetch-data/', 'Fetch data', Fetch],
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
      {routes.map(([path, display, component]) => (
        <Route path={path} exact={true} component={component} />
      ))}
    </div>
  </BrowserRouter>
)

export default Router
