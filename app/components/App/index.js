import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styles from './styles.css'

const App = ({ children }) => (
  <div>
    <header className={styles.header}>
      <h1>
        Relay shopping app
      </h1>
      <ul className={styles.list}>
        <li><Link to="/">List</Link></li>
      </ul>
    </header>

    <div>
      { children }
    </div>
    <footer className={styles.footer} />
  </div>
  )

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
