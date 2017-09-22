import React from 'react'
import products from './products.json';
import Item from './productItem';
import Controls from './controls';
import styles from './products.css';
import keyIndex from 'react-key-index';



    const  buttons = [{name: 'id',value: 1},{name: 'name', value: 0},{name: 'price', value: 0}];

class ProductList extends React.Component { 

  constructor(props) {
    super(props); 

    this.state = {
      sortBy: 'id',
      direction: 0,
    }
    
    this.reorder = this.reorder.bind(this);
    this.orderItems = this.orderItems.bind(this);
    this.compareStrings = this.compareStrings.bind(this);
  }

  oldcompareObjects = (field) => (a, b) => {
    return  a[field] - b[field];   
  }

  compareStrings = (field) => (a, b) => {
    if ( this.state.direction == 0 ) {
      return a[field] > b[field];
    } else {
      return a[field] < b[field];
    }
  }

  orderItems (field)  {
      return  products.slice().sort(this.compareStrings(this.state.sortBy));
  }

  reorder (value, prevState) {
    if (value == this.state.sortBy) {
    this.setState({ 
      sortBy: value, 
      direction: !this.state.direction,
    })
    } else {
    this.setState({ 
      sortBy: value, 
      direction: this.state.direction,
    })
    }
  } 

  render () {
    return (
      <div className={ styles.container }> 
     <span> Sort by: </span>
        <ul className={ styles.sortclasses }>

          {buttons.map((button, index) =>( 
            <Controls 
              key={index}
              name={button.name}
              checkedClass={button.name == this.state.sortBy ? 'arrow': 'noarrow'}
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

