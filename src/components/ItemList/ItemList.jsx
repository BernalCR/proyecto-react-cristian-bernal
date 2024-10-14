
// import './ItemList.css';
import { Link } from 'react-router-dom';
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className="cardContainer col_4_big col_3_large col_2_medium col_1_small">
      {productos.map(({ id, img, name, price }) => (
        <Link to={`/item/${id}`} className='productCard' key={id}>
          <img src={img} alt={name} />
          <div className='txtBox_card'> 
            <h3>{name}</h3>
            <p className='price_card'>$ {price}</p>
            <p>Ver Detalles</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ItemList

