import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CartWidget = () => {
  const{ totalItems } = useContext(CartContext)

  return (
    <Link id='header__cart_box' to="/cart">
      <img className="cart_icon" src="https://img.icons8.com/?size=100&id=j3XI41kBOIXY&format=png&color=FFFFFF" alt="shop cart icon"/>
      {
          totalItems > 0 ? <span>{totalItems}</span> : 0
      }
    </Link>
  )
}

export default CartWidget