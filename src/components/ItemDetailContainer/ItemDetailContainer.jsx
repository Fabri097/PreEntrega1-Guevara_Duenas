import { useState, useEffect } from "react"
import { getProducts } from "../../data/data";
import { useParams } from "react-router-dom";
import Contador from "../Contador/Contador"
import"./itemdetail.css"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct} = useParams()

  useEffect(() => {
    getProducts()
     .then((data) => {
      const findProduct = data.find((product) => product.id === idProduct);
      setProduct(findProduct);
    });
  }, [idProduct]);
  
  return(
    <div className="product-card">
    <img src={product.image} width={500} alt="" />
    <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>precio:S/{product.price}</p>
        <Contador />
    </div>
</div>
  ) 
  
};

export default ItemDetailContainer;
