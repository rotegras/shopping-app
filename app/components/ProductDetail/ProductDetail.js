import React from 'react'
import styles from './ProductDetail.css'

const ProductDetail = (props) => {
  const productsData = props.route.data
  const id = props.params.id
  const item = productsData.find(product =>  product.id === id)

  return (
    <div className="container" >
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <img className="image" src={item.imageUrl} alt={item.name} />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <h1>{item.name}</h1>
          <div className={styles.info}>
            <div className={styles.price}>{item.price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
