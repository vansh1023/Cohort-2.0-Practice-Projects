import React from 'react'
import NavLinks from './NavLinks'
import BookButton from './BookButton'

const Navbar = () => {
  return (
    <div className='main-nav'>
        <h2>Horizon Courts</h2>
        <NavLinks />
        <BookButton />
    </div>
  )
}

export default Navbar