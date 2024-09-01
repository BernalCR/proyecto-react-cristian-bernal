import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div id="header__cart_box">
      <img className="cart_icon" src="https://img.icons8.com/?size=100&id=j3XI41kBOIXY&format=png&color=FFFFFF" alt="shop cart icon"/>
      <p id="count_items">0</p>
    </div> 
  )
}

export default CartWidget