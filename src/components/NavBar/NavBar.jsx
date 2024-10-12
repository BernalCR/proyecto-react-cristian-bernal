import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link id="logoNav" to="/"><img src="/Gallery/logo.png" alt="logo de la marca"/></Link>
        
        <div className="right">
            <ul id="navLinks">
                <li><NavLink to="/categoria/alimento">Alimento</NavLink></li>
                <li><NavLink to="/categoria/snacks">Snacks</NavLink></li>
                <li><NavLink to="/categoria/juguetes">Juguetes</NavLink></li>
                <li><NavLink to="/categoria/accesorios">Accesorios</NavLink></li>
            </ul>

            <div></div>

            <CartWidget/>
        </div>
    </nav>
  )
}

export default NavBar