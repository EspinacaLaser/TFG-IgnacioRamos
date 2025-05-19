import React from 'react'
import Logo  from './Logo'
import Navbar from './Navbar'
import LoginButton from './LoginButton'

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #ccc' }}>
      <Logo />
      <Navbar />
      <LoginButton />
    </header>
  )
}

export default Header