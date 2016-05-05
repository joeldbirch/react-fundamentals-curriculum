import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
)

if (module.hot) {
  module.hot.accept()
}

module.exports = routes
