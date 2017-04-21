import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  browserHistory,
} from 'react-router'

import App from './components/App'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory} >
    <Route
      path="/"
      component={App}
    />
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)
