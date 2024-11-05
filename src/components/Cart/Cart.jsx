import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2> No hay productos en el carrito 😟</h2>
        <button>
          {" "}
          <Link to="/"> Volver al inicio </Link>{" "}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="titu-carrito">Productos en el carrito</h2>
      {cart.map((productCart) => (
        <div key={productCart.id} className="carrito">
          <Link to={`/detail/${productCart.id}`}>
            <img
              src={productCart.image[0]}
              width={100}
              alt={productCart.name}
            />
          </Link>

          <p>{productCart.name}</p>
          <p>Cantidad: {productCart.quantity}</p>
          <p>Precio c/u: {productCart.price}</p>
          <p>Precio parcial: {productCart.quantity * productCart.price}</p>
          <button onClick={() => deleteProductById(productCart.id)}>
            borrar producto
          </button>
        </div>
      ))}
      <p className="total-precio">Precio total:S/ {totalPrice()}</p>
      <button className="borrar-carrito" onClick={deleteCart}>
        Borrar carrito
      </button>
      <button><Link to="/checkout">Terminar mi compra</Link></button>
    </div>
  );
};
export default Cart;
