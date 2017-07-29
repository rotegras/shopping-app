import React from 'react'
import products from './products.json';
import Item from './productItem';
import styles from './products.css';


const ProductList = (props) => (
  <div className={ styles.list }>
    {products.map((product) =>( 
      <Item
        key={product.id}          
        {...product}
      />
    ))}
  </div>
)

export default ProductList;

