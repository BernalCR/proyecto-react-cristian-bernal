import React from 'react'
// import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, stock}) => {
  const [quantity, setQuantity] = useState(0)
  const { addItem } = useContext(CartContext);

  const handlerQuantity = (quantity) => {
    setQuantity(quantity);
    const item = { id, name, price }
    addItem(item, quantity);
  }

  return (
    <div className='box_container ecommContainer txt_center'>
        <img src={img} alt={name} />
        <h2 style={{marginTop: "2rem"}}>{name} </h2>
        <h3 style={{marginTop: "2rem"}}>$ {price} </h3>
        <p style={{marginTop: "2rem"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>

        {
          quantity > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={handlerQuantity}/>)
        }

    </div>
  )
}

export default ItemDetail