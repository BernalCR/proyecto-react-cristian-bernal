import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CartWidget = () => {
  const{ totalItems } = useContext(CartContext)

  return (
    <Link to="/cart">
    <div id="header__cart_box">
      <img className="cart_icon" src="https://img.icons8.com/?size=100&id=j3XI41kBOIXY&format=png&color=FFFFFF" alt="shop cart icon"/>
      {
          totalItems > 0 ? <span>{totalItems}</span> : 0
      }
    </div> 
    </Link>
  )
}

export default CartWidget