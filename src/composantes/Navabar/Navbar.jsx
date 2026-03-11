import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        AMG-location
      </div>
      <ul className="nav-menu">
        <li>Accueil</li>
        <li>Apropos</li>
        <li>Gatégorie</li>
        <li>Catalogue</li>
        <li className="nav-contact">Contact</li>
      </ul>

    </div>
  )
}

export default Navbar