import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import ProductList from './components/ProductList'

import './index.css'

ReactDOM.render(

  <App>
    <ProductList />
  </App>, 
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)
