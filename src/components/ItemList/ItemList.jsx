
// import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({productos}) => {
  return (
    <div className="contenedorProductos">
      {productos.map(({ id, img, name, price }) => (
        <div className='cardProducto' key={id}>
          <img src={img} alt={name} />
          <h3>Nombre: {name}</h3>
          <p>Precio: {price}</p>
          <p>ID: {id}</p>
          <Link to={`/item/${id}`}>Ver Detalles</Link>
        </div>
      ))}
    </div>
  )
}

export default ItemList

