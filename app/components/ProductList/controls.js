import React from 'react';
import styles from './controls.css';


class Controls extends React.Component  { 
// const Controls = ()=> (

  constructor ({ initialButtonState }) {
    super(); 

    this.state = {
      buttonState: initialButtonState, 
    }
  }


   orderItems = () => {

      // let newClickState = e.target.value;
      let prevState = this.state.buttonState;
      this.setState ({ buttonState: !prevState }); 
      this.props.orderList();

   }

render () {
  return (
      <div className= { styles.controls } >
        <div className={ styles.sortby }>
          Sort by Price
        </div>
        <input 
          className="sort" 
          type="checkbox" 
          name="sort" 
          value={this.state.buttonState} 
          onClick={() => this.orderItems()}></input>
      </div>

  )
}
// )
}

export default Controls;




