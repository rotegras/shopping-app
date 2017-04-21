import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const App = ({ children }) => (
  <div>
    <header className={styles.header}>
      Relay shopping app
    </header>

    <div>
      { children }
    </div>
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
