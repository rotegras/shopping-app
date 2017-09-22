import React from 'react';
import PropTypes from 'prop-types'
import styles from './controls.css';
import FontAwesome from  'react-fontawesome';


const Controls = ({name, checked, checkedClass, action}) => {
  
  const callBack = (name) => {
    action(name); 
    console.log(name);
  }

  return(
    <li className={ styles.li }> 
      <span className={styles.checkedClass}>
        <label>
          <input
            type='checkbox'
            checked={checked}
            name={name}
            onChange={(e) => callBack(name)}
          />
        </label>
      </span>
     <span> {name} </span>
    </li>
  );
}

Controls.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Controls;




