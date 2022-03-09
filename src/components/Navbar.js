import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const [button, setButton] = useState(true)

    const showButton = () => {
        if(window.innerWidth <= 1653) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)
  return (
    <div>
        <div className="header-container">
            <div className="logo">
                <img src="/img/logo.jpeg" alt="" />
            </div>

            <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
           
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                       <a href="/" className='nav-links'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#about" className='nav-links'>About</a>
                    </li>

                    <li className='nav-item'>
                        <a href="#products" className='nav-links'>Products</a>
                    </li>

                    <li className='nav-item'>
                       <a href="#gallery" className='nav-links'>Gallery</a>
                    </li>

                    <li className='nav-item'>
                       <a href="#contact" className='nav-links'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
   
  )
}

export default Navbar