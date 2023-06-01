import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <>
      <nav className='header'>
        <ul className='leftheader'>
          <li className='logo' style={{ color: 'white', fontSize: '18px' }}>Smart Foods</li>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul className='rightheader'>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Kart"><FontAwesomeIcon icon={faCartShopping} /> </Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
