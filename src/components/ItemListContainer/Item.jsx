import { Link } from "react-router-dom";
import "./item.css"

const Item = ({ product }) => {

  return (
    <div className="carta">
      <img src={product.image[0]} className="img-item" width={150} />
      <p className="text-item">{product.name}</p>
      <p  className="text-item">Precio:S/{product.price}</p>
      <button className="detalle"><Link to = {"/detail/" + product.id} className="detalle">Mas Detalles</Link></button>
    </div>
  );
};

export default Item;
