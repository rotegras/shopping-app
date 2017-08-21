import React from 'react'
import Controls from './controls'
import ProductList from './productList'
import styles from './products.css'


class Shop extends React.Component {  

  state={
    checked: false   
  }
    
  render() {
    <div>
      <Controls/>
      <ProductList/>
    </div>
  }
}


export default Shop; 

