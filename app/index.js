import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'

ReactDOM.render(routes, document.querySelector('#main'))

if (module.hot) {
  module.hot.accept()
}
