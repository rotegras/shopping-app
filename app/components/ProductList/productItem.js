import React from 'react'
import PropTypes from 'prop-types'
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router'

import styles from './products.css'


const Item = ({ id, imageUrl, name, price }) => {

  return(
    <div className={styles.item} >
      <img className="image" src={imageUrl} alt=""/>
      <div className={styles.info}>
        <div className={styles.id}>{id}</div>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.detaillink}>
          <Link to={"/product/"+id}>See</Link>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Item;
