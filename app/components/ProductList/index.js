import React from 'react'
import products from './products.json';
import Item from './productItem';
import Controls from './controls';
import styles from './products.css';
import keyIndex from 'react-key-index';

class ProductList extends React.Component { 

  constructor(props) {
    super(props); 

    const ITEMS = products;

    const idList = products.map(function(item) {
      return item.id; 
    });
    
    console.log(idList);

    this.state = {
      listItems: ITEMS,
      buttonState: 0,
      sortBy: 'price'
    }
  }

  compareObjects = (a, b, field) => {
    return  a['price'] - b['price'];
    return  a[this.state.sortBy] - b[this.state.sortBy];
  }

  orderItems = () => {

      let prevState = this.state.listItems;

      // don't mutate the original array
        
      let newListItems = prevState.slice().sort(this.compareObjects);

      this.setState ({
          // sortBy: field,
          listItems: newListItems, 
          buttonState: !this.state.buttonState, 

      })    

  }

  render () {
    return (
      <div className={ styles.container }> 

        <div className={ styles.controls }>
          <Controls 
            initialButtonState = { this.state.buttonState } 
            orderList = { this.orderItems }
          />
        </div>

        <div className={ styles.list }>
          {this.state.listItems.map((item) =>( 
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

