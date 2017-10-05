import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styles from './ProductItem.css'


const Item = ({ id, imageUrl, name, price }) => (
  <div className={styles.item} >
    <img className="image" src={imageUrl} alt="" />
    <div className={styles.info}>
      <div className={styles.id}>{id}</div>
      <div className={styles.title}>{name}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.detaillink}>
        <Link to={'/product/' + id}>See</Link>
      </div>
    </div>
  </div>
)

Item.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Item
