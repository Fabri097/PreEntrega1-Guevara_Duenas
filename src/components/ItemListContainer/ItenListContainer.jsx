import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

  const getProducts = () => {
    const productsRef = collection(db, "products");
    getDocs(productsRef)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });
        setProducts(productsDb);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  };

  const getProductByCategory = () => {
    const productsRef = collection(db, "products");
    const queryCategories = query(productsRef, where("category", "==", idCategory));
    getDocs(queryCategories)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });
        setProducts(productsDb);
      })
      .catch((error) => {
        console.error("Error fetching products by category: ", error);
      });
  };

  useEffect(() => {
    setLoading(true);

    if (idCategory) {
      getProductByCategory();
    } else {
      getProducts();
    }

    setLoading(false);
  }, [idCategory]);

  return (
    <div className="itemListContainer">
      {loading ? (
        <div>cargando....</div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
