import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <nav>
        {/* left */}
<div className='left-nav'>
<img src={logo} alt='logo'/>
</div>

<div>
    <input type='text' placeholder='Search or jump to'/>
</div>

        {/* center */}


        {/* right */}


    </nav>
  )
}

export default Navbar