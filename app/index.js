import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductList/productDetail'


import './index.css'

ReactDOM.render(
      <Router >
        <Route path="/" component={App }history={hashHistory}>
          <IndexRoute  component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
        </Route>
      </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)


