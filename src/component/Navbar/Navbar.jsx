import React from 'react'

import './Navbar.css'

import Logo from './Logo.png'

function Navbar() {
  return (
    <div>
      <div class="topnav">
      <img  src={Logo}></img>
      <h1>EMPLOYEE DETAILS</h1>
      <a href="#">Home</a>
      <a href="#">Details</a>
      <a href="#">Contact</a>
      <a href="#">About</a>
      <a href="#">Login</a>
  </div>
    </div>
  )
}

export default Navbar