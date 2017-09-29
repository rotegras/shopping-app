import React from 'react'
import PropTypes from 'prop-types'
import styles from './productdetail.css'
import {Router, Route, Link, params, IndexRoute, hashHistory} from 'react-router'


class ProductDetail extends React.Component {  


  render() {

    const productsData = this.props.route.data;
    const id = this.props.params.id;

    const item = productsData.filter(product => {
        return product.id == id;
        
    });
console.log(item);

      return (
        <div className="container" >
          <div className="row">
            <div class="col-sm-12 col-md-8 col-lg-4">
              <img className="image" src={item[0].imageUrl} alt={item[0].name}/>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <h1>{item[0].name}</h1>
              <div className={styles.info}>
                <div className={styles.price}>{item[0].price}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }




export default ProductDetail;
