import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar_wrapper'>
      <div className="nav_left">
            <div className="name">
                Amod Seth
            </div>
            <span>
                toggle
            </span>
      </div>
      <div className="nav_right">
            <div className="ul_list">
                <ul style={{listStyle: "none"}}>
                    <li><Link to='/'>Home </Link></li>
                    <li><Link to={'/Projects'}>Projects</Link></li>
	                <li><Link to={'/aboutme'}>About Me</Link></li>
	                <li><Link to={'/resume'}>resume</Link></li> 
	                <li><Link to={'/contact'}>contact</Link></li>
                </ul>

            </div>
            <button className='button'>
              Contact me
            </button>
      </div>

    </div>
  )
}

export default Navbar