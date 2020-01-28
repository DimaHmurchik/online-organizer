import React, { Component } from 'react'
import { Switch, Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import { LoginPage, MainPage } from './views/index'

class App extends Component {
  render() {
    const History = createBrowserHistory()
    return (
      <Router history={History}>
        <Switch>
          <Route path="/user" component = {MainPage} />
          <Route path="/login" component = {LoginPage} />
        </Switch>
      </Router>
    )
  }
}

export default App