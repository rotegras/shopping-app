import React from 'react'
import PropTypes from 'prop-types'
import styles from './Controls.css'

const Controls = ({ name, checked, orderDirection, action }) => {
  const callBack = () => {
    action(name)
  }

  return (
    <li className={styles.li}>
      <span
        className={checked ? (orderDirection ? styles.arrowdown : styles.arrowup) : styles.arrowhidden}
      >
        <input
          type="checkbox"
          checked={checked}
          name={name}
          onChange={() => callBack(name)}
        />
      </span>
      <span className={styles.name}> {name} </span>
    </li>
  )
}

Controls.propTypes = {
  name: PropTypes.string.isRequired,
  // checked: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}

export default Controls
