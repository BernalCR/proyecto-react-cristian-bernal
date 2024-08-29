import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav>
        <a id="logoNav" href="../index.html"><img src="../Resources/Gallery/logo.png" alt="logo de la marca"/></a>
        
        <div class="right">
            <ul id="navLinks">
                <li><a href="./products.html">Productos</a></li>
                <li><a href="./plans.html">Planes</a></li>
                <li><a href="./services.html">Servicios</a></li>
                <li><a href="./about-us.html">Nosotros</a></li>
            </ul>

            <div></div>

            <CartWidget/>
        </div>
    </nav>
  )
}

export default NavBar