import React from 'react'
import PropTypes from 'prop-types'
import styles from './products.css'


const ProductDetail = ({ id, imageUrl, name, price }) => (
  <div className={styles.item} >
    <h1>Hello</h1>
    <img className="image" src={imageUrl} alt=""/>
    <div className={styles.info}>
      <div className={styles.id}>{id}</div>
      <div className={styles.title}>{name}</div>
      <div className={styles.price}>{price}</div>
    </div>
  </div>
)

ProductDetail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductDetail;
