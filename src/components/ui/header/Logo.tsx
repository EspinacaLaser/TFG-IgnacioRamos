import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
      </Link>
    </div>
  )
}

export default Logo
