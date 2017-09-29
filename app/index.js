import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductList/productDetail'

import products from './products.json';

import './index.css'

ReactDOM.render(
      <Router history={hashHistory}>
        <Route component={App}>
          <Route path="/"  component={ProductList} data={products} />
          <Route path="/product/:id" component={ProductDetail}  data={products} />
        </Route>
      </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)


