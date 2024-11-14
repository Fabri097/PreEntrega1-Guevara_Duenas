import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Tacho from "../../assets/tachito.png";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, increment, decrement } = useContext(CartContext);

  const handleDelete = (productId) => {
    deleteProductById(productId);
    toast.error("Se borró el producto");
  };

  if (cart.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2> No hay productos en el carrito 😟</h2>
        <button>
          <Link to="/"> Volver al inicio </Link>
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="master-container">
        <div className="cardts cart">
          <label className="title">Tu Carrito</label>
          <div className="products">
            <div className="product">
              {cart.map((productCart) => (
                <div key={productCart.id} className="carrito">
                  <Link to={`/detail/${productCart.id}`}>
                    <img
                      src={productCart.image[0]}
                      width={100}
                      alt={productCart.name}
                    />
                  </Link>
                  <div className="nam-pri">
                    <span>{productCart.name}</span>
                    <p>
                      Precio C/U: S/{productCart.price}
                    </p>
                  </div>
                  <div className="quantity">
                    <button className="incre-decre" onClick={() => decrement(productCart.id)}>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="14"
                        width="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          stroke="#47484b"
                          d="M20 12L4 12"
                        ></path>
                      </svg>
                    </button>
                    <label>{productCart.quantity}</label>
                    <button className="incre-decre" onClick={() => increment(productCart.id)}>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="14"
                        width="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          stroke="#47484b"
                          d="M12 4V20M20 12H4"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="pri-de">
                    <label className="price small">S/{productCart.quantity * productCart.price} </label>
                    <hr/>
                    <img
                      className="delete"
                      src={Tacho}
                      onClick={() => handleDelete(productCart.id)}                
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cardts checkout">
          <label className="title">Checkout</label>
          <div className="checkout--footer">
            <label className="price">
              <sup>S/</sup> {totalPrice()}
            </label>
            <button className="checkout-btn">
              <Link className="check" to="/checkout">
                checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

