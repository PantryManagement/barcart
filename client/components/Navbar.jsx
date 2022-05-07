import React from 'react';
import {Link, Router} from 'react-router-dom';

import styles from '../scss/navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar navbar-container">
      <Link to='/' className='app-title'>Barcart</Link>
      <ul className="nav-menu">
        <li className='nav-item'>
          <Link to='listPlaceholder' className='nav-link'>Shopping List</Link>
        </li>
        <li className='nav-item'>
          <Link to='cocktailsPlaceholder' className='nav-link'>Cocktails</Link>
        </li>
        <li className='nav-item'>
          <Link to='ingredientPlaceholder' className='nav-link'>User Bar</Link>
        </li>
      </ul>
    </div>
  )
}
