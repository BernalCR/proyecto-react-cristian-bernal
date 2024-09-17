import React from 'react'

const ItemListContainer = ({greeting}) => {

  let prod = [
    {nombre: "aaa", precio: 1},
    {nombre: "bbb", precio: 2},
    {nombre: "ccc", precio: 3},
    {nombre: "ddd", precio: 4}
  ] 

let x = prod.map(p =>(
  <p>{p.nombre}</p>
))

  return (
    <>    
      <h1>{greeting}</h1>
    
      {
        
      prod.map(p =>(
        <p>{p.nombre}</p>
      ))

      }
    </>

  )
}

export default ItemListContainer