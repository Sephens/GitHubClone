import React from 'react'
import logo from '../images/logo2.png'
import myimage from '../images/myimage.png'
import { FiBell, FiPlus } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'

function Navbar() {
  return (
    <nav className="navbar">
      {/* left */}
      <div className="left-nav">
        <img src={logo} alt="logo" />



    <div>
        <input type="text" placeholder="Search or jump to..." />
      </div>

      </div>

      

      {/* center */}
      <div className="center-nav">
        <h4>Pull requests</h4>
        <h4>Issues</h4>
        <h4>Marketplace</h4>
        <h4>Explore</h4>
      </div>
      {/* right */}

      <div className="right-nav">
        <FiBell />

        <div className="nav-right-icons">
        <FiPlus />
        <IoMdArrowDropdown />
      </div>

      <div className="nav-right-icons">
        <img src={myimage} alt="my-mage"/>
        <IoMdArrowDropdown />
      </div>

      </div>
      
    </nav>
  )
}

export default Navbar
