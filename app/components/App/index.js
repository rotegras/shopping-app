import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import { Link, Router, Route } from 'react-router'

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
    </div>
    )

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App
