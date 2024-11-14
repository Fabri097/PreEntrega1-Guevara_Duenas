import { Link } from "react-router-dom";
import Info from "../../assets/informacion.png";
import "./item.css";

const Item = ({ product }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={product.image[0]} className="detalles-carta" width={150} />
        </div>
        <div className="card-title">{product.name}</div>

        <hr className="card-divider" />
        <div className="card-footer">
          <div className="card-price">
            <span>S/</span>
            {product.price}
          </div>
          <button className="card-btn">
            <Link to={"/detail/" + product.id}>
              {" "}
              <img className="i" src={Info} />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
