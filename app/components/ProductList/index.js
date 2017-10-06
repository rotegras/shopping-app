import React from 'react'
import {Router, Route, IndexRoute, Link } from 'react-router'
import Item from './ProductItem'
import Controls from './Controls'

import styles from './ProductItem.css'

    const  buttons = [{name: 'id',value: 1},{name: 'name', value: 0},{name: 'price', value: 0}]

class ProductList extends React.Component { 
  constructor(props) {
    super(props); 

    this.state = {
      sortBy: 'id',
      orderDirection: 0,
    };
    
    this.reorder = this.reorder.bind(this);
    this.orderItems = this.orderItems.bind(this);
    this.createComparer = this.createComparer.bind(this);
  }

  createComparer = (field) => (a, b) => {
    if ( this.state.orderDirection ) {
      return a[field] < b[field];
    } 
    return a[field] > b[field];
  }

  orderItems (field) {
    return this.props.route.data.slice().sort(this.createComparer(this.state.sortBy));
  }

  reorder (value, prevState) {
    if (value === this.state.sortBy) {
    this.setState({ 
      sortBy: value, 
      orderDirection: !this.state.orderDirection,
    })
    } else {
    this.setState({ 
      sortBy: value, 
    }) 
    }
  } 

  render () {
    return (
      <div className="container-fluid"> 
        <span className={styles.sorttitle}> Sort by: </span>
        <ul className={styles.sortclasses}>
        {buttons.map((button, index) =>( 
          <Controls 
            key={index}
            name={button.name}
            orderDirection={this.state.orderDirection}
            checked={button.name == this.state.sortBy ? true : false}
            action={this.reorder}
          />
        ))}
        </ul>
        <div className={ styles.list }>
        {this.orderItems(this.state.orderBy).map((item, index) =>( 
          <Item
            key={item.id}          
            {...item}
          />
        ))}
      </div>
    </div>
    )
  }
}

export default ProductList;
