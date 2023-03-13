import React from 'react'
import { Link} from 'react-router-dom'

function NavBar() {

  return (
    <div className='navbar'>
        <Link to="/">
            Home
        </Link>
        <Link to="/portfolio">
            Portfolio
        </Link>
        <Link to="/contactme">
            Contact
        </Link>
    </div>
  )
}

export default NavBar