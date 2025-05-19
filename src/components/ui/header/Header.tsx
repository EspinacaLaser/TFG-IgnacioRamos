import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import LoginButton from './LoginButton'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><Logo /></div>
      <div className={styles.navbar}><Navbar /></div>
      <div className={styles.loginButton}><LoginButton /></div>
    </header>
  )
}

export default Header