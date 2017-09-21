import React from 'react';
import PropTypes from 'prop-types'
import styles from './controls.css';


const Controls = ({name, checked, action}) => {
  
  const callBack = (name) => {
    action(name); 
    console.log(name);
  }

  return(
    <li className={ styles.li }> 
      <span className= {styles.input}>
        <input
          type='checkbox'
          checked={checked}
          name={name}
          onChange={(e) => callBack(name)}
        />
      </span>
     <span> Sort by: </span>
     <span> {name} </span>
    </li>
  );
}

Controls.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Controls;




