import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router'

import App from './components/App'
import ProductList from './components/ProductList'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory} >
    <Route
      path="/"
      component={App}
    >
      <IndexRoute
        component={ProductList}
      />
    </Route>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)
