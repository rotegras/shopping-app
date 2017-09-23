import React from 'react';
import PropTypes from 'prop-types'
import styles from './controls.css';
import FontAwesome from  'react-fontawesome';


const Controls = ({name, checked, checkedClass, orderDirection, action}) => {
  
  const callBack = (name) => {
    action(name); 
  }

  return(
    <li className={ styles.li }> 
      <span className={checked ? (orderDirection ? styles.arrowdown : styles.arrow) : styles.arrowhidden}>
        <label>
          <input
            type='checkbox'
            checked={checked}
            name={name}
            onChange={(e) => callBack(name)}
          />
        </label>
      </span>
     <span className={styles.name}> {name} </span>
    </li>
  );
}

Controls.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Controls;




