import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="header-container">
            <div className="logo">
                <img src="/img/logo.jpeg" alt="" />
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>

                    <li>
                        <a href="">Products</a>
                    </li>

                    <li>
                        <a href="">Gallery</a>
                    </li>

                    <li>
                        <a href="">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar