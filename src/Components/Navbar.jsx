import React from 'react'
import './Navbar.css'
import Search from '../assets/Search.png'
import Navbar_logo from '../assets/Navbar_logo.jpeg'
import Explore from '../assets/Explore.png'
import Bell from '../assets/Bell.png'
import Cart from '../assets/Cart.png'
import Bookmark from '../assets/Bookmark.png'
import Hobbies from '../assets/Hobbies.png'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='box'>
      <div className='navbar d-flex align-items-center justify-content-between'>

        <img src={Navbar_logo} alt="Logo" className='logo-size' />

    
        <form className='d-flex search-form'>
          <input type="text" className='form-control bg-light search-bar' placeholder='Search Here...' />
          <button type='submit' className='btn search-btn'>
            <img src={Search} alt="Search" className='search-icon' />
          </button>
        </form>


        <nav className="desktop-nav">
          <ul className="d-flex align-items-center gap-4">

            <li className="nav-item d-flex align-items-center dropdown">
              <img src={Explore} alt="Explore" className="icon-size" />
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Explore
              </a>
            </li>

            <li className="nav-item d-flex align-items-center dropdown">
              <img src={Hobbies} alt="Hobbies" className="icon-size" />
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Hobbies
              </a>
            </li>

            <img src={Bookmark} alt="Bookmark" className="icon-size" />
            <img src={Bell} alt="Bell" className="icon-size" />
            <img src={Cart} alt="Cart" className="icon-size" />

            <a href="#" className="sign-in-btn">Sign In</a>

          </ul>
        </nav>

       
        <div className='mobile-icons'>
          <button className="mobile-search-btn">
            <img src={Search} alt="Search" className="search-icon" />
          </button>

          <img src={Bell} alt="Notifications" className="icon-size" />

          <button className="menu-btn">
            <FaBars className="menu-icon" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
