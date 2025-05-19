import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
  return (
    <Link to="/login">
      <button style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#6d166a',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Login
      </button>
    </Link>
  )
}

export default LoginButton
