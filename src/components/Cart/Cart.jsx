import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
    const { cart, totalPrice, totalItems, emptyCart, deleteItem} = useContext(CartContext)

    if(totalItems === 0 ){
        return(
            <>
                <h2>El Carrito esta vacio, agrega algo!</h2>
                <Link to="/">Var productos</Link>
            </>
        )
    }
    console.log(cart)
  return (
    <div className='box_container' style={{marginTop: "var(--maginSections)"}}>
        <div className='itemRow head'>
            <p>Nombre</p>
            <span></span>
            <p>Precio</p>
            <span></span>
            <p>cantidad</p>
            <span></span>
            <p>Delete Item</p>
        </div>
        {
            cart.map(({ item: { id, name, price }, quantity }) => (
                <div className='itemRow' key={id}>
                    <p>{name}</p>
                    <span></span>
                    <p>$ {price}</p>
                    <span></span>
                    <p>{quantity}</p>
                    <span></span>
                    <button onClick={() => deleteItem(id)}>Eliminar</button>
                </div>
            ))
        }

        <h2 style={{marginTop: "var(--maginSections)"}}>Precio total: ${totalPrice}</h2>
        <h2>Cantidad de items: {totalItems}</h2>
        <button style={{marginTop: "2rem"}} onClick={() => emptyCart()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
    </div>
  )
}

export default Cart