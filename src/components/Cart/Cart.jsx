import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

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
    <div>
        {
            cart.map(({ item: { id, name, price }, quantity }) => (
                <div key={id}>
                    <p>Nombre: {name}</p>
                    <p>Precio: {price}</p>
                    <p>cantidad: {quantity}</p>
                    <button onClick={() => deleteItem(id)}>Eliminar</button>
                </div>
            ))
        }

        <h2>Precio total: ${totalPrice}</h2>
        <h2>Cantidad de items: {totalItems}</h2>
        <button onClick={() => emptyCart()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
    </div>
  )
}

export default Cart