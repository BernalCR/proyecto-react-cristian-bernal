import React, { useEffect, useState } from 'react'
import { getItem } from '../../products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {idItem} = useParams()

    useEffect(()=>{
        getItem(idItem).then(respuesta => setProducto(respuesta))
        console.log(producto)
    }, [idItem])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer