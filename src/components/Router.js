import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Fetch from './fetch/Fetch'
import Home from './home/Home'
import PasswordInput from './password/PasswordInput'
import PropsAndState from './propsandstate/PropsAndState'
import {ContextExample} from './context/Context'
import Button from './button/Button'

const routes = [
  ['/props-and-state/', 'Props and State'],
  ['/password/', 'Password'],
  ['/fetch-data/', 'Fetch data'],
  ['/context/', 'Context'],
  ['/button/', 'Button'],
]

const Router = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul className="Navigation">
          {routes.map(([route, display]) => (
            <li>
              <Link to={route}>{display}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Route path="/" exact={true} component={Home} />
      <Route path="/props-and-state/" component={PropsAndState} />
      <Route path="/password/" component={PasswordInput} />
      <Route path="/fetch-data/" component={Fetch} />
      <Route path="/context/" component={ContextExample} />
      <Route path="/button/" component={Button} />
    </div>
  </BrowserRouter>
)

export default Router
