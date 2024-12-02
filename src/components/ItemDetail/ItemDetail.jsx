import React from 'react'
// import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, stock}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false)
  const { addItem } = useContext(CartContext);

  const handlerQuantity = (quantityy) => {
    setQuantity(quantityy);

    console.log("quantityy")
    console.log(quantityy)
    console.log("quantity")
    console.log(quantity)
  }

  const addToCart = () =>{
    console.log("add to cart: " + quantity)
    console.log(quantity)
    const item = { id, name, price, stock }
    addItem(item, quantity);
    setAdded(true);
  }
  

  return (
    <div className='box_container ecommContainer'>
        <img src={img} alt={name} />

        <div>
          <h2 style={{marginTop: "8rem"}}>{name} </h2>
          <h3 style={{marginTop: "2rem"}}>$ {price} </h3>
          <p style={{margin: "2rem 0"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>
          {
            added ? (<Link to="/cart" className='classicBtn'> Terminar Compra</Link>) : (
              <>
                <Contador min={1} stock={stock} funcionAgregar={handlerQuantity} />
                <button className='classicBtn' style={{marginTop: "2rem"}} onClick={()=>addToCart()}> Agregar al carrito</button>
              </>
            )
          }
        
          <p style={{marginTop: "4rem"}}><strong>Beneficios</strong> <br/> amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>
          <p style={{marginTop: "2rem"}}><strong>Caracteristicas</strong> <br/> amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. Quibusdam voluptates assumenda ipsam magni dignissimos totam ex culpa maiores atque?</p>
          <p style={{marginTop: "4rem"}}><strong>Envío</strong> <br/>Para obtener información de envío precisa revisa terminos de envio</p>
        </div>
    </div>
  )
}

export default ItemDetail