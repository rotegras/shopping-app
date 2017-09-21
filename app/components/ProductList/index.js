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
    }
    
    this.reorder = this.reorder.bind(this);
    this.orderItems = this.orderItems.bind(this);
    this.compareStrings = this.compareStrings.bind(this);
  }

  oldcompareObjects = (field) => (a, b) => {
    return  a[field] - b[field];   
    console.log(field);
  }



  compareStrings = (field) => (a, b) => {
      console.log('compareStrings', this.state.sortBy);
      return a[field] > b[field];
  }

  orderItems (field)  {
      return  products.slice().sort(this.compareStrings(this.state.sortBy));
  }

  reorder (value) {
    this.setState({ 
      sortBy: value, 
    })
  } 

  render () {
    return (
      <div className={ styles.container }> 
        <ul className={ styles.sortclasses }>
          {buttons.map((button, index) =>( 
            <Controls 
              key={index}
              name={button.name}
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

