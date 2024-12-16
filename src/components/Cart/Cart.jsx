import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'
import Contador from '../Contador/Contador'

const Cart = () => {
    const { cart, totalPrice, totalItems, emptyCart, deleteItem, updateItem} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0);

    const handlerQuantity = (quantity, id) => {
        setQuantity(quantity);
        updateItem(quantity, id)
    }

    if(totalItems === 0 ){
        return(
            <>
                <h2>El Carrito esta vacio, agrega algo!</h2>
                <Link to="/">Var productos</Link>
            </>
        )
    }

    return (
        <div className='box_container' style={{marginTop: "var(--maginSections)"}}>
            <div className='itemRow head'>
                <p><strong>Nombre</strong></p>
                <span></span>
                <p><strong>Precio</strong></p>
                <span></span>
                <p><strong>cantidad</strong></p>
                <span></span>
                <p><strong>Delete Item</strong></p>
            </div>

            {
                cart.map(({ item: { id, name, price, stock }, quantity }) => (
                    <div className='itemRow' key={id}>
                        <p>{name}</p>
                        <span></span>
                        <p>$ {price}</p>
                        <span></span>
                        <div>
                            <Contador min={1} stock={stock} funcionAgregar={handlerQuantity} start={quantity} idItem = {id}/>
                        </div>
                        <span></span>
                        <div>
                            <button className='classicBtn' onClick={() => deleteItem(id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            }
        
            <h2 style={{marginTop: "var(--maginSections)"}}>Precio total: ${totalPrice}</h2>
            <h2>Cantidad de items: {totalItems}</h2>
    
            <Link className='classicBtn' style={{marginTop: "4rem"}} to="/checkout">Finalizar compra</Link>
            <button className='trashBtn' style={{marginTop: "2rem"}} onClick={() => emptyCart()}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart