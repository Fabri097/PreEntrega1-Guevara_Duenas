import { Link } from "react-router-dom";
import "./item.css"

const Item = ({ product }) => {
  return (
    <div className="carta">
      <img src={product.image} width={150} />
      <h2>{product.name}</h2>
      <p>precio:S/{product.price}</p>
      <button><Link to = {"/detail/" + product.id} className="detalle" >Compre ahora</Link></button>
    </div>
  );
};

export default Item;
