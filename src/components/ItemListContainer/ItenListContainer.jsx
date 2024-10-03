import { useState, useEffect } from "react"
import { getProducts } from "../../data/data";
import ItemList from "./ItemList";
import hocFilterProducts from "../../hoc/hocFilterProducts";
import { useParams } from "react-router-dom";

import useProducts from "../../hooks/useProducts";

const ItemListContainer = ( ) => {
  const [products, setProducts] = useState([])
  const {idCategory } = useParams()
  useEffect(() => {
    getProducts()
      .then((data) => {
        if(idCategory){
          
          const filterProducts = data.filter( (product)=> product.category === idCategory )
          setProducts(filterProducts)
        }else{
          
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("Finalizo la promesa")
      })
  }, [idCategory])
  return (
    <div className="itemListcontainer">
      <ItemList products={products}/>
    </div>
  );
};



const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc
//export default ItemListContainer;
