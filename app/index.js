import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/index'
import Shop from './components/ProductList/shop'

import './index.css'

ReactDOM.render(

  <App>
    <Shop />
  </App>, 
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)
