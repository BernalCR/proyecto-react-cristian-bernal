import { useState } from "react"

const Contador = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) setContador(contador +1)
    }

    const restarContador = () => {
        if ( contador > inicial)  setContador (contador - 1)
    }

  return (
    <div className="counterBox">
        <div style={{marginTop: "2rem"}}>
            <button onClick={restarContador}> - </button>
            <strong>{contador}</strong>
            <button onClick={sumarContador}> + </button>
        </div>

        <button style={{marginTop: "2rem"}} onClick={()=>funcionAgregar(contador)}> Agregar al carrito</button>
    </div>
  )
}

export default Contador