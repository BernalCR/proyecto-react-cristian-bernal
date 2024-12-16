import { useState, useEffect } from "react"
import "./Contador.css"

const Contador = ({min, stock, funcionAgregar, start, idItem}) => {
    const initialValue = start ?? min;
    const [contador, setContador] = useState(initialValue);

    const sumarContador = () => {
        setContador((prev) => (prev < stock ? prev + 1 : prev));
    };

    const restarContador = () => {
        setContador((prev) => (prev > min ? prev - 1 : prev));
    };

    // Llama a funcionAgregar cada vez que el contador cambie
    useEffect(() => {
        funcionAgregar(contador, idItem);
    }, [contador]);

  return (
        <div id="counterBox">
            <button onClick={restarContador}> - </button>
            <span>{contador}</span>
            <button onClick={sumarContador}> + </button>
        </div>
  )
}

export default Contador