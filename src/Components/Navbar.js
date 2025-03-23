import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <Link className='nav-link' to="/">tbs cooked this</Link>
      </div>
      <div className='nav-links'>
        <div className='nav-item'>
            <Link className='nav-link' to="/">
                back 2 me
            </Link>    
        </div>
        <div className='nav-item'>
            <Link className='nav-link' to="/about">
                click me first
            </Link>    
        </div>
        <div className='nav-item'>
            <Link className='nav-link' to="/contact">
                then me
            </Link>    
        </div>
      </div>
    </div>
  )
}

export default Navbar
