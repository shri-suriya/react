import React from 'react'

import './Navbar.css'
import {Link} from 'react-router-dom'
import Logo from './Logo.png'


function Navbar() {
  return (
    <div>
      <div class="topnav">
      <img  src={Logo}></img>
      <h1>EMPLOYEE DETAILS</h1>
      <Link to="/App" > <a href="#">Home</a></Link>
      <Link to="/details"><a className='Atag' href="#">Details</a></Link>
      <Link to="/" > <a href="#">Contact</a></Link>
      <Link to="/" ><a href="#">About</a></Link>
      <Link to="/" ><a href="#">Login</a></Link>
  </div>
    </div>
  )
}

export default Navbar