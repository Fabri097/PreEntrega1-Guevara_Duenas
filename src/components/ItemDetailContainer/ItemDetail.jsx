import { useState, useEffect, useContext } from "react";
import Contador from "../ItemCounter/Contador";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const [showItemContador, setShowItemContador] = useState(true);
  const [currentImage, setCurrentImage] = useState("");
  const [images, setImages] = useState([]);
  const { addProductInCart } = useContext(CartContext);

  const addProduct = (contador) => {
    const productCart = { ...product, quantity: contador };
    addProductInCart(productCart);
    setShowItemContador(false);
    toast.success("Se agregó correctamente el producto");
  };

  useEffect(() => {
    if (product && Array.isArray(product.image)) {
      setCurrentImage(product.image[0] || "");
      setImages(product.image.filter((image) => image !== product.image[0]));
    }
  }, [product]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
          {images.map((image) => (
            <img
              src={image}
              key={image}
              alt={`Imagen del producto ${product.name}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>

        <div className="main-image">
          <img
            src={currentImage}
            alt={`Imagen actual del producto ${product.name}`}
          />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: S/{product.price}</p>
        {showItemContador ? (
          <Contador stock={product.stock} addProduct={addProduct} />
        ) : (
          <div className="buttons-ter-se">
            <button className="terminar-compra">
              <span>
                <Link className="ter" to="/cart">
                  Terminar mi compra
                </Link>
              </span>
            </button>

            <button className="seguir-compra">
              <span>
                <Link className="segui" to="/">
                  Seguir Comprando
                </Link>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
