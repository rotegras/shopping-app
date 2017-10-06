import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail/ProductDetail'
import products from './products.json'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProductList} data={products} />
      <Route path="/product/:id" component={ProductDetail} data={products} />
    </Route>
  </Router>,
  /* slint-disable-next-line no-undef */
  document.getElementById('root'),
)
