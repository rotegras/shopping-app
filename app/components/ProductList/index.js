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

    this.passButton = this.passButton.bind(this);
    this.orderItems = this.orderItems.bind(this);
    this.compareObjects = this.compareObjects.bind(this);
  }
  
  passButton (value) {
    this.setState({ 
      sortBy: value, 
    })
  }

  compareObjects = (a, b, field) => {
    return  a[field] - b[field];
    console.log(field);
  }

  orderItems (field)  {
      return  products.slice().sort(this.compareObjects);
  }



  render () {
    return (
      <div className={ styles.container }> 


        <div className={ styles.controls }>
          {buttons.map((button, index) =>( 
            
            <Controls 
              key={index}
              active={this.state.sortBy}
              buttonName={button.name}
              passButtonDown={this.passButton}
            />
        ))}
        </div>

        <div className={ styles.list }>
          {this.orderItems(this.state.orderBy).map((item) =>( 
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

