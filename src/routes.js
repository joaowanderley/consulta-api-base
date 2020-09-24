import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/login'
import Lista from './components/lista'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/Lista' component={Lista} />
    </Switch>
  </BrowserRouter>
)

export default Routes
