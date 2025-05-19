import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 }}>
        <li><NavLink to="/cliente">Cliente</NavLink></li>
        <li><NavLink to="/recepcionista">Recepcionista</NavLink></li>
        <li><NavLink to="/admin">Admin</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
