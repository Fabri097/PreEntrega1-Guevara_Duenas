import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./itemdetail.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idProduct } = useParams();

  const getProductById = () => {
    const docRef = doc(db, "products", idProduct);
    getDoc(docRef)
      .then((dataDb) => {
        const productDb = { id: dataDb.id, ...dataDb.data() };
        setProduct(productDb);
      })
      .catch((error) => {
        console.error("Error fetching product: ", error);
      });
  };

  useEffect(() => {
    getProductById();
  }, [idProduct]);

  return product ? <ItemDetail product={product} /> : <div>Cargando...</div>;
};

export default ItemDetailContainer;
