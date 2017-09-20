import React from 'react';
import PropTypes from 'prop-types'
import styles from './controls.css';


const Controls = ({ buttonName, active, passButtonDown }) => {

  const passButtonUp = () => {
    passButtonDown(name);
    console.log(name);
  };

  return (
      <div className= { styles.controls } >
        <div className={ styles.sortby }>
         Sort by {name} 
        </div>
        <input 
          type="checkbox" 
          name={buttonName}
          checked={ active = buttonName ? true : false }
          onChange={passButtonUp}
        />
      </div>
  );
}

Controls.propTypes = {
  buttonName: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
}

export default Controls;




