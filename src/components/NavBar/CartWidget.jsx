import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import iconCart from "../../assets/carrito.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext); // Corrección aquí
  const quantity = totalQuantity;

  return (
    <Link to="/cart" className="cartwidget">
      <img className={quantity === 0 ? "empty-cart" : "icon-cart"} src={iconCart} width={40} />
      <p className="number-cartwidget">{quantity >= 1 && quantity}</p>
    </Link>
  );
};

export default CartWidget;
